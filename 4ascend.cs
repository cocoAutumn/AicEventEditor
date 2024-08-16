public void Make1PvsCPU(string ai_key) {
	this.online = 0;
	switch (this.which_first) {
	case TTRGameInfo.WHICH_FIRST.DICE:
		this.setAi(0, "@noel"); // maybe "@hashino" is valid?
		this.setAi(1, ai_key);
		return;
	case TTRGameInfo.WHICH_FIRST.IS_1P:
		this.setAi(0, "@noel");
		this.setAi(1, "@ixia");
		return;
	case TTRGameInfo.WHICH_FIRST.IS_2P:
		this.setAi(0, ai_key);
		this.setAi(1, ai_key);
		return;
	default:
		return;
	}
}

public void setMaxLife(int n) { this.max_life = n << 1; } // max 20

public bool createPlant(TTRPoint Pos, bool record_to_rpl = true) {
	if (!this.TTR.white1p || Pos.filled || Pos.plant_filled) return false;
	// the rest code is omitted
} // this line is only for matching