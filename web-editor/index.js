function run()
{
    if(document.getElementById("output"))
    {
      document.getElementById("output").remove();
      prepareFrame();
    }
    
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;
    let frameObj = document.getElementById("output");

    for (let index = 0; index < scripts.length; index++) {
      let script = document.createElement('script');
      script.src = scripts[index];
      let doc = document.getElementById("output").contentWindow.document.head;
      doc.append(script);
    }

    frameObj.contentWindow.document.body.innerHTML =  "<style>" + css + "</style>" + html;
    frameObj.contentWindow.eval(js);
    try {
      const result = eval(js);
      if (result !== undefined) {
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
}

function prepareFrame() {
    let ifrm = document.createElement("iframe");
    ifrm.id = "output";
    document.getElementById("out").insertBefore(ifrm,document.getElementById("out").childNodes[2]);
}

const addLibraries = () => {
  let userInput = prompt('Enter External Libraries:');

  if (userInput !== null) {
      scripts.push(userInput);
      alert('Added: ' + userInput);
  }
}

const downloadFile = () => {
    const link = document.createElement("a");
    const content = "<html><head><style>" + document.getElementById("css").value + "</style>"  + "<script>" + document.getElementById("js").value  + "</script></head><body>" + document.getElementById("html").value + "</body></html>"; 
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "index.html";
    link.click();
    URL.revokeObjectURL(link.href);
 };

 async function generateText() {
    const promptText = document.getElementById("input-field").value;
    const prompt_template = `<|system|>\n<|end|>\n<|user|>\n${promptText}<|end|>\n<|assistant|>`;
  
    try {
      const response = await axios.post(apiEndpoint, {
        inputs: promptText,
        options: {
          max_new_token:512,
          temperature:0.2,
          do_sample:true,
          top_k:50,
          top_p:0.95,
          return_full_text: true,
        },
      }, {
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      const generatedText = response.data[0]?.generated_text;
      document.getElementById("input-field").value = generatedText;
    } catch (error) {
      console.error('Error generating text:', error);
    }
}

console = {
  log: function(message) {
    logToConsole(message, 'log');
  },
  error: function(message) {
    logToConsole(message, 'error');
  },
  warn: function(message) {
    logToConsole(message, 'warn');
  }
};

function logToConsole(message, type = 'log') {
  const consoleElement = document.getElementById('console');
  const logItem = document.createElement('div');
  logItem.classList.add(type);
  logItem.textContent = message;
  consoleElement.appendChild(logItem);
  consoleElement.scrollTop = consoleElement.scrollHeight;
}

const scripts = [];
const apiToken = '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'; //pls don't abuse this token :)
const apiEndpoint = "https://api-inference.huggingface.co/models/HuggingFaceH4/starchat-beta";