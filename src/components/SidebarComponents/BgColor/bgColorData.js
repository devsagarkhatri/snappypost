const colorPalette = ["#fff","#fd7f6f", "#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7","#115f9a", "#1984c5", "#22a7f0", "#48b5c4", "#76c68f", "#a6d75b", "#c9e52f", "#d0ee11", "#d0f400","#d7e1ee", "#cbd6e4", "#bfcbdb", "#b3bfd1", "#a4a2a8", "#df8879", "#c86558", "#b04238", "#991f17", "#0010d9", "#0020ff", "#0040ff", "#0060ff", "#0080ff", "#009fff", "#00bfff", "#00ffff","#54bebe", "#76c8c8", "#98d1d1", "#badbdb", "#dedad2", "#e4bcad", "#df979e", "#d7658b"];
function getColorPalette(){
    return colorPalette;
}


function getNewColorPalette(){
    let newPalette =[];
    for (let color of colorPalette){
        newPalette.push("linear-gradient(to right,"+color+","+color+")",);
    }

    return newPalette;
}
const colorPalette1 = getNewColorPalette();

// export default colorPalette;
export default colorPalette1;