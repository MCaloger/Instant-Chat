export const Chars = [
"Q",
"W",
"E",
"R",
"T",
"Y",
"U",
"I",
"O",
"P",
"A",
"S",
"D",
"F",
"G",
"H",
"J",
"K",
"L",
"Z",
"X",
"C",
"V",
"B",
"N",
"M",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"]

export const GenerateName = (length) => {
    let constructedName = "";
    for(let char = 0 ; char < length ; char++) {
        let selected = Chars[Math.floor((Math.random()*Chars.length))]
        let lower = Math.random();
        if(lower < 0.5) {
            selected = selected.toLowerCase();
        }

        constructedName += selected
    }
    return constructedName;
}