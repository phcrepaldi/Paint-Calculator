function calc() {
    let res = 0;
    let la = parseFloat(document.getElementById("la").value);
    let al = parseFloat(document.getElementById("al").value);
    let cob = parseFloat(document.getElementById("cob").value);
    let area = la * al;
    let t = area / cob;
    let l5 = parseInt(t / 5);
    let l = (t % 5);
    l = Math.ceil(t % 5); /* arrendonda pro inteiro acima */
    document.getElementById("area").value = area.toFixed(2);
    document.getElementById("litro").value = t.toFixed(2);
    document.getElementById("l5").value = l5;
    document.getElementById("l").value = l;
}
