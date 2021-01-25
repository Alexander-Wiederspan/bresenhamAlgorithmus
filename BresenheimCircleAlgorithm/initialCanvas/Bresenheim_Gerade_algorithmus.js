export class Bresenheim_Geraden_Algorithmus {
    x_0;
    y_0;
    deltaX;
    deltaY;
    xEnde;
    yEnde;

    constructor(xStart, yStart, n = 0, xEnde, yEnde) {
        this.x_0 = xStart;
        this.y_0 = yStart;
        this.xEnde = xEnde;
        this.yEnde = yEnde;

        this.deltaX = this.xEnde - this.x_0;
        this.deltaY = this.yEnde - this.y_0;
    }
}
