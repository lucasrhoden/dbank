import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  //currentValue := 100;

  stable var startTime = Time.now();

  let id = 87423984728473;

  public func deposit(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Insufficient funds");
    };
  };

  public query func balance() : async Float {
    return currentValue
  };

  public func compound() {
    let currentTime = Time.now();
    let timeElapsedNs = currentTime - startTime;
    let timeElapsedS = timeElapsedNs / 1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  }

}