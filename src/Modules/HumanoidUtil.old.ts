// General humanoid utility code.

export namespace HumanoidUtil {
  // Retrieves a humanoid from a descendant (Players only).
  // @param descendant Child of a humanoid model, like a limb
  // @return Humanoid
  export function GetHumanoid(descendant: Instance) {
    let character = descendant;
    while (character) {
      let humanoid = character.FindFirstChildOfClass("Humanoid");
      if (humanoid) {
        return humanoid;
      }
      character = character.Parent!;
    }
  }

  export function ForceUnseatHumanoid(humanoid: Humanoid) {
    if (humanoid.SeatPart) {
      let weld = humanoid.SeatPart.FindFirstChild<Weld>("SeatWeld");
      if (weld) {
        weld.Destroy();
      }

      humanoid.SeatPart.Sit(undefined);
    }
    humanoid.Sit = false;
  }
}
