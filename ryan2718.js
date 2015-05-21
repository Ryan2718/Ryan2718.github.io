function header () {
    document.writeln("<h1>Ryan Forsyth</h1>")
    document.writeln("<div>");
    document.writeln("<a href='index.html'>Home Page</a> | ");
    document.writeln("<a href='languages.html'>Programming Langauges</a> | ");
    document.writeln("<a href='interestAreas.html'>Interest Areas</a>");
    document.writeln("</div>");
}

function repeatEmptyTD(n) {
    for (i = 0; i < n; i++) {
        document.writeln("<td></td>");
    }
}

function repeatColoredTD(n) {
    for (i = 0; i < n; i++) {
        document.writeln("<td class='yes'></td>");
    }
}
