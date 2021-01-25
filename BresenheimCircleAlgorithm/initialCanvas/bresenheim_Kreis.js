class BresenheimKreisAlgorithmus {
    constructor(xm, ym, r, x0 = 0, y0, n = 0) {
        this.xm = Number(xm);
        this.ym = Number(ym);
        this.r = Number(r);
        this.x0 = Number(x0);
        this.y0 = Number(y0);
        this.x = Number(x0);
        this.y = Number(y0);
        this.n = Number(n);
        this.e = Number(5 - 4 * Number(r));
        this.counter = 0;
        this.result = document.getElementById('ergebnisse');
        this.result.value += `#### Beginn des Kreisalgorithmus ####\n`;
        this.result.value += `\n${this.counter + 1} Pixel = e_${this.counter} = ${this.e}, x_${this.counter} = ${this.x}, y_${this.counter} = ${this.y}\n`;
        this.pixelZeichnen(this.x0, this.y0);
        this.workIt();
    }

    pixelZeichnen = (x, y) => {
        const ersteXPositiv = this.xm + x;
        const ersteXnegativ = this.xm - x;

        const ersteYPositiv = this.ym + y;
        const ersteYNegativ = this.ym - y;

        const zweiteXPositiv = this.xm + y;
        const zweiteXNegativ = this.xm - y;

        const zweiteYPositiv = this.ym + x;
        const zweiteYNegativ = this.ym - x;

        this.result.value +=`\rPunkt 1: (x_m + x_${this.counter}, y_m + y_${this.counter}) = (${ersteXPositiv}, ${ersteYPositiv})\n`;
        this.result.value +=`\rPunkt 2: (x_m + y_${this.counter}, y_m + x_${this.counter}) = (${zweiteXPositiv},${zweiteYPositiv})\n`;
        this.result.value +=`\rPunkt 3: (x_m + x_${this.counter}, y_m - y_${this.counter}) = (${ersteXPositiv}, ${ersteYNegativ})\n`;
        this.result.value +=`\rPunkt 4: (x_m + y_${this.counter}, y_m - x_${this.counter}) = (${zweiteXPositiv}, ${zweiteYNegativ})\n`;
        this.result.value +=`\rPunkt 5: (x_m - x_${this.counter}, y_m + y_${this.counter}) = (${ersteXnegativ}, ${ersteYPositiv})\n`;
        this.result.value +=`\rPunkt 6: (x_m - y_${this.counter}, y_m + x_${this.counter}) = (${zweiteXNegativ}, ${zweiteYPositiv})\n`;
        this.result.value +=`\rPunkt 7: (x_m - x_${this.counter}, y_m - y_${this.counter}) = (${ersteXnegativ}, ${ersteYNegativ})\n`;
        this.result.value +=`\rPunkt 8: (x_m - y_${this.counter}, y_m - x_${this.counter}) = (${zweiteXNegativ}, ${zweiteYNegativ})\n`;
    }

    workIt = () => {
        while (this.counter <= this.n) {
            this.counter++;
            this.result.value += `\n\n#### Ende des ${this.counter} Durchlaufs #####\n\n`;
            this.x = this.x + 1;

            if (this.e > 0) {
                this.y = this.y - 1;
                this.result.value +=`Da e_${this.counter} > 0 berechnen wir: \n e_${this.counter} = ${this.e} + 8 * (${this.x - 1} - ${this.y + 1}) + 20)\n\n`;
                this.e = this.e + 8 * (this.x - 1 - this.y + 1) + 20;
            } else {
                this.result.value +=`Da e_${this.counter} <= 0 berechnen wir:\n e_${this.counter} = ${this.e} = ${this.e} + 8 * (${this.x - 1} + 12)\n\n`;
                this.e = this.e + 8 * (this.x - 1) + 12;
            }
            this.result.value +=`${this.counter + 1} Pixel = e_${this.counter} = ${this.e}, x_${this.counter} = ${this.x}, y_${this.counter} = ${this.y}\n`;
            this.pixelZeichnen(this.x, this.y);
        }
    }
}

let rechnungsZaehler = 1;

document.getElementById('berechnen').addEventListener('click', () => {
    document.getElementById('ergebnisse').value += `\n\n#################################\n####### Anfang Rechnung ${rechnungsZaehler} #######\n#################################\n\n`;
    new BresenheimKreisAlgorithmus(
        document.getElementById('xm').value,
        document.getElementById('ym').value,
        document.getElementById('r').value,
        document.getElementById('x0').value,
        document.getElementById('y0').value,
        document.getElementById('n').value
    )
    rechnungsZaehler++;
});
