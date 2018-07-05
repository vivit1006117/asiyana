const baseUrl = window.location.hostname === 'apna-mohalla.github.io' ? '/asiyana/' : '/';
export const paths = {
  baseUrl,
  homePath: baseUrl,
  signInPath: `${baseUrl}signIn`,
  signUpPath: `${baseUrl}signUp`,
};

/* eslint no-console: 1 */
console.log(paths);

export const labels = {
  home: 'Home',
  signIn: 'Sign In',
  signUp: 'Sign Up',
};