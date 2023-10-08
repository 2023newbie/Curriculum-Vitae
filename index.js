const downloadPDF = ()=> {
    const link=document.createElement('a');
    const filePath = './vohoaiducCV.pdf'
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}

const button = document.getElementById('download_pdf')
button.onclick = downloadPDF