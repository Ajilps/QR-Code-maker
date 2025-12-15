import "./style.css";
import "./testStyle.css";

import QRCode from "qrcode";
const canvas = document.getElementById("canvas");

const inputText = document.getElementById("textInput");
const createQR = document.getElementById("createQR");
const downloadButton = document.getElementById("download");
const copyButton = document.getElementById("copy");
const clearButton = document.getElementById("clearText");

function validation(inputText) {
  const text = inputText.trim();
  try {
    if (text === "") throw new Error("Enter a valid text");
    console.log(text.length);
    if (text.length >= 2604)
      throw new Error("The message is too large maximum 2600 characters ");
    return { success: true, message: "validation success " };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

const textBoxEvent = inputText.addEventListener("input", () => {
  inputText.style.height = "auto"; // reset
  inputText.style.height = inputText.scrollHeight + "px";
});

const clearEvent = clearButton.addEventListener("click", () => {
  inputText.value = "";
});

const createQRListener = createQR.addEventListener("click", (element, e) => {
  const validate = validation(inputText.value);

  if (validate.success === false) {
    console.log(validate);
    return;
  }

  QRCode.toCanvas(
    canvas,
    inputText.value,
    { errorCorrectionLevel: "M" },
    function (error) {
      if (error) console.error(error);
      console.log("success!");
      downloadButton.classList.remove("hide");
      copyButton.classList.remove("hide");
    }
  );
});

const downloadListener = downloadButton.addEventListener("click", (e) => {
  const link = document.createElement("a");
  link.download = "QRCode.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

const copyListener = copyButton.addEventListener("click", async (e) => {
  canvas.toBlob(async (blob) => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      alert("QR code copied...");
    } catch (error) {
      console.log(error);
    }
  });
});
