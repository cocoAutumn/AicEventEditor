public void setMaxLife(int n) { this.max_life = n << 1; } // max 20

public void Make1PvsCPU(string s) { // local 2p versus
	this.online = 0;
	this.setAi(0, this.which_first == TTRGameInfo.WHICH_FIRST.IS_2P ? s : "@noel");
	this.setAi(1, s);
}

public bool createPlant(TTRPoint Pos, bool record_to_rpl = true) { // Big Motor
	if (!this.TTR.white1p || Pos.filled || Pos.plant_filled) return false;
	// ...
}