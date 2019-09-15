declare namespace CharacterUtil {
  export function GetPlayerHumanoid(player: Player): Humanoid | undefined;
  export function GetAlivePlayerHumanoid(player: Player): Humanoid | undefined;
  export function GetAlivePlayerRootPart(player: Player): BasePart | undefined;
  export function GetPlayerRootPart(player: Player): BasePart | undefined;
  export function UnequipTools(player: Player): void;
  export function GetPlayerFromCharacter(
    descendant: Instance
  ): Player | undefined;
}
