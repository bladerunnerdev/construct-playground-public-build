const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{tanks_tankGreen1: 0},
	{ground_grass_broken: 0},
	{ground_grass: 0},
	{Solid: 0},
	{ground_grass2: 0},
	{Keyboard: 0},
	{alienYellow: 0}
];

self.InstanceType = {
	tanks_tankGreen1: class extends self.ISpriteInstance {},
	ground_grass_broken: class extends self.ISpriteInstance {},
	ground_grass: class extends self.ISpriteInstance {},
	ground_grass2: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	alienYellow: class extends self.ISpriteInstance {}
}