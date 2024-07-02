declare module "*.png"
declare module "*.jpg"
declare module "*.svg"{
    const content: import('react-native').ImageURISource;
    export default content;
}