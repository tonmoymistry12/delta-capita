export const mockSignPDF = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file));
    }, 2000);
  });
};




