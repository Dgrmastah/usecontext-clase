import { useLanguage } from "./LanguageContext";

const Greeting = () => {
    const {language} = useLanguage ()
    
    const greetings = {
        en: "hello!",
        es: "hola!",
        fr: "bojour!"
    }

    return (
        <>
        <h2>{greetings[language]}</h2>
        </>
    )
};

export default Greeting;