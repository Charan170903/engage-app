export const checkEmailExists = async (email: string): Promise<boolean> => {
  const existingEmails = ["charan@gmail.com", "user@engage.com"];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(existingEmails.includes(email.toLowerCase()));
    }, 600);
  });
};
