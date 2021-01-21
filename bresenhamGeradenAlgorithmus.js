/**
 * Algorithmus zur Berechenung des Bresenham-Geraden-Algorithmuses, implementiert in JavaScript.
 * Die Entscheidungsvariable gibt an, welcher von zwei Pixeln angestrahlt werden soll um eine Gerade darzustellen.
 * @param anfX - X-Koordinate des Anfangspunktes
 * @param anfY - Y-Koordinate des Anfangspunktes
 * @param n - Anzahl der zu berechechnenden Schritte
 * @param endX - X-Koordinate des Endpunktes
 * @param endY - Y-Koordinate des Endpunktes
 */
function bresenhamGerade (anfX, anfY, n=0, endX, endY) {
    let counter = 0;
    var xTreibend;

    let deltax = endX - anfX;
    console.log("Delta x = xe-xa = " + endX + anfY + "=" + deltax);
    let deltay = endY - anfY;
    console.log("Delta y = ye-ya = " + endY + anfY + "=" + deltay);

    if (Math.abs(deltax) >= Math.abs(deltay)) {
        xTreibend = true;
        console.log("Ist x die treibende Komponente?: " + xTreibend + " weil dx >= dy");

        //Erste Entscheidungsvariable
        let e = Math.abs(deltax) - 2 * Math.abs(deltay);
        console.log("n = " + counter);
        console.log("Erster Wert der Entscheidungsvariable eo =" + e);
        console.log("xn =" + anfX);
        console.log("yn =" + anfY);

        //mache dinge solange bis die geforderte Anzahl der Schritte erreicht ist
        //umbauen zu anfX != endX
        while (counter < n) {
            counter++;
            console.log("Aktueller Schritt n: " + counter);

            //treibende Komponenten erhoehen oder verringern, je nach vorzeichen (+sign deltaX)
            if (deltax < 0) {
                anfX--;

            } else {
                anfX++;
            }
            console.log("xn: " + anfX);

            // Entscheidungsvariable ist groeßer als 0; y bleibt gleich
            if (e > 0) {
                e = e - 2 * Math.abs(deltay);

                // Entscheidungsvariable ist kleiner als 0; y wird erhöht
            } else {
                if (deltay < 0) {
                    anfY--;
                } else {
                    anfY++;
                }
                console.log("yn: " + anfY);

                e = e + 2 * (Math.abs(deltax) - Math.abs(deltay));

            }
            console.log("en = e + 2 * " + "(" + Math.abs(deltax) + "-" + Math.abs(deltay) + ")" + "=" +e);
        }

        //Betrag von deltax ist kleiner als deltay - treibende Kraft ist Y
    } else {
        xTreibend = false;
        console.log("Ist x die treibende Komponente?: " + xTreibend + " weil dx <= dy");

        //Erste Entscheidungsvariable
        let e = Math.abs(deltay) - 2 * Math.abs(deltax);
        console.log("n = " + counter);
        console.log("Erster Wert der Entscheidungsvariable eo =" + e);
        console.log("xn =" + anfX);
        console.log("yn =" + anfY);

        //Dinge machen bis die gewuenschte Anzahl an Schritten ereicht ist
        while (counter < n) {
            counter++;
            console.log("Aktueller Schritt n: " + counter);

            //treibende Komponenten erhoehen oder verringern, je nach vorzeichen
            if (anfY < 0) {
                anfY--;
            } else {
                anfY++
            }
            console.log("yn: " + anfY);

            // Entscheidungsvariable ist groeßer als 0; x bleibt gleich
            if (e > 0) {
                e = e - 2 * Math.abs(deltax);

                // Entscheidungsvariable ist kleiner als 0; y wird erhöht
            } else {
                if (deltax < 0) {
                    anfX--;
                } else {
                    anfX++
                }
                e = e + 2 * (Math.abs(deltay) - Math.abs(deltax));
            }
            console.log("en = e + 2 * " + "(" + Math.abs(deltay) + "-" + Math.abs(deltax) + ")" + "=" +e);
        }

    }
}

function call (){
    bresenhamGerade(document.getElementById("anfX").value, document.getElementById("anfY").value,
        document.getElementById("anzahlSchritte").value, document.getElementById("endX").value,document.getElementById("endY").value)
}