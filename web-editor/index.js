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
    let content = "<!DOCTYPE html><html><head><style>" + document.getElementById("css").value + "</style>";
    
    for (let index = 0; index < scripts.length; index++) {
      content += '<script src="' + scripts[index] + '"></script>';
    }
    
    content += "<script>" + document.getElementById("js").value  + "</script></head><body>" + document.getElementById("html").value + "</body></html>"; 
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "index.html";
    link.click();
    URL.revokeObjectURL(link.href);
 };

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function autoSave() {
  const key_js = 'js';
  const value_js = document.getElementById("js").value;

  const key_html = 'html';
  const value_html = document.getElementById("html").value;

  const key_css = 'css';
  const value_css = document.getElementById("css").value;

  const key_gen = 'generated';
  const value_gen = document.getElementById("input-field").value;

  saveToLocalStorage(key_js, value_js);
  saveToLocalStorage(key_html, value_html);
  saveToLocalStorage(key_css, value_css);
  saveToLocalStorage(key_gen, value_gen);
}

// Call autoSave function every 1 minutes
setInterval(autoSave, 1 * 60 * 1000);

async function generateText() {
    let promptText = document.getElementById("input-field").value;
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

function loadPreviousData()
{
  if(localStorage.getItem("html") != null)
    document.getElementById("html").value = localStorage.getItem("html");
  if(localStorage.getItem("css") != null)
    document.getElementById("css").value = localStorage.getItem("css");
  if(localStorage.getItem("js") != null)
    document.getElementById("js").value = localStorage.getItem("js");
  if(localStorage.getItem("generated") != null)
    document.getElementById("input-field").value = localStorage.getItem("generated");
}

setTimeout(loadPreviousData, 100);

const scripts = [];
const apiToken = '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'; //pls don't abuse this token :)
const apiEndpoint = "https://api-inference.huggingface.co/models/HuggingFaceH4/starchat-beta";