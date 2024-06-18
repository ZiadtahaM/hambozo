var qoute = [
    {
        qoute: "what do you feel about yourself.",
        Auther: "--Elbert "
    },

    {
        qoute: "'we all going to die.'",
        Auther: "--Frank "
    },
    {
        qoute: "'life is too short.'",
        Auther: "--Wayne "
    },

]




function gettheqoute() {

    var num = Math.floor(Math.random() * qoute.length)
    console.log(num)


    document.getElementById("quote").innerHTML = qoute[num].qoute;
    document.getElementById("auther").innerHTML = qoute[num].Auther;

}