import React, { Component } from 'react';


class Canvas extends Component {
    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);
    }

    //1. Is user painting? 2. Color of paint. 3. Previous position user clicked before painting 
    isPainting = false 
    userStrokeStyle = '#EE92C2';
    guestStrokeStyle = '#F0C987';
    line = [] //This is where the paint data will be stored;
 
    prevPos = { offsetX: 0, offsetY: 0 }; 

    componentDidMount() {  
        this.canvas.width = 1000;
        this.canvas.height = 800;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 5;
    }

    paint(prevPos, currPos, strokeStyle) {
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = prevPos;

        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;

        this.ctx.moveTo(x,y);
        this.ctx.lineTo(offsetX, offsetY);

        this.ctx.stroke();
        this.prevPos = { offsetX, offsetY }


    }

    // User clicks -> Indicate is painting & store positions + offsets
    onMouseDown({ nativeEvent}) {
        const { offsetX, offsetY } = nativeEvent;
        this.isPainting = true;
        this.prevPos = { offsetX, offsetY };
    }

    //User is moving the mouse -> If user is painting, draw.
    onMouseMove({ nativeEvent }) {

        if (this.isPainting) {
            const { offsetX, offsetY } = nativeEvent; 
            const offSetData = { offsetX, offsetY };

            const positionData = {
                start: { ...this.prevPos },
                stop: { ...offSetData },
            };

            // Add position to the line array 
            this.line = this.line.concat(positionData);
            
            this.paint(this.prevPos, offSetData, this.userStrokeStyle);

        }
    }

    endPaintEvent() {
        if (this.isPainting) {
            this.isPainting = false;
        }
    }

    render() {
        return (
          <canvas
          // We use the ref attribute to get direct access to the canvas element. 
            ref={(ref) => (this.canvas = ref)}
            style={{ background: 'black' }}
            onMouseDown={this.onMouseDown}
            onMouseLeave={this.endPaintEvent}
            onMouseUp={this.endPaintEvent}
            onMouseMove={this.onMouseMove}
          />
        );
      }
    
}
export default Canvas;