function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a: number, b: number): number | string {
  try {
    // create try catch block and call the primitive multiply function
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof NotificationException) {
      // if the error is an instance of NotificationException then call the function recursively
      return reliableMultiply(a, b);
    } else {
      // if the error is an instance of ErrorException then return "Error"
      return "Error";
    }
  }
}

console.log(reliableMultiply(8, 8));
