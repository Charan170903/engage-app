export const isValidEmail = (email:string) :boolean =>{
    const trimmedEmail = email.trim();

    if(!trimmedEmail)
        return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(trimmedEmail);

}