const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Timer,
		C3.Plugins.LocalStorage,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.System.Cnds.Every,
		C3.Behaviors.Timer.Cnds.IsTimerRunning,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Cnds.CompareValue,
		C3.Plugins.LocalStorage.Exps.ItemValue
	];
};
self.C3_JsPropNameTable = [
	{Background: 0},
	{ShopBackground: 0},
	{Sine: 0},
	{Cookie: 0},
	{CookieText: 0},
	{Mouse: 0},
	{Price: 0},
	{Level: 0},
	{CursorShopIcon: 0},
	{CursorShopText: 0},
	{BakeryShopIcon: 0},
	{BakeryShopText: 0},
	{Time: 0},
	{Timer: 0},
	{FactoryShopIcon: 0},
	{FactoryShopText: 0},
	{LocalStorage: 0},
	{Cookies: 0},
	{ProductionAmount: 0}
];

self.InstanceType = {
	Background: class extends self.ISpriteInstance {},
	ShopBackground: class extends self.ISpriteInstance {},
	Cookie: class extends self.ISpriteInstance {},
	CookieText: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	CursorShopIcon: class extends self.ISpriteInstance {},
	CursorShopText: class extends self.ITextInstance {},
	BakeryShopIcon: class extends self.ISpriteInstance {},
	BakeryShopText: class extends self.ITextInstance {},
	FactoryShopIcon: class extends self.ISpriteInstance {},
	FactoryShopText: class extends self.ITextInstance {},
	LocalStorage: class extends self.IInstance {}
}