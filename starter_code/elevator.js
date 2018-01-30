class Elevator {
  constructor () {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = ['Up', 'Down'];
  }

  update () {
    log();
  }

  log () {
    console.log('Direction: ' + this.direction + 'Floor' + this.floor);
  }

  start () {
    setInterval(() => {
      update();
    }, 1000);
  }

  stop () {
    clearInterval();
  }

  // _passengersEnter () { }
  // _passengersLeave () { }
  floorUp () {
    if (this.floor <= 10) {
      this.floor++;
    } else {
      console.log('You are at the highest floor');
    }
  }
  floorDown () {
    if (this.floor > 0) {
      this.floor--;
    } else {
      console.log('You are on the ground floor');
    }
  // call () { }
  }
}

module.exports = Elevator;
