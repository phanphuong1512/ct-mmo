declare module "*.css";
declare module "*.scss";

// Helpful typed module for CSS modules (if used elsewhere)
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}