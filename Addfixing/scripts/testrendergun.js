function renderFirst(renderinstance,gunitem,gunstack,model,entity,type,data){
	gunitem.gunInfo.userenderscript = false;
	renderinstance.renderItem(type,gunstack,data);
	gunitem.gunInfo.userenderscript = true;
}
function renderThird(renderinstance,gunitem,gunstack,model,entity,type,data){
	gunitem.gunInfo.userenderscript = false;
	renderinstance.renderItem(type,gunstack,data);
	gunitem.gunInfo.userenderscript = true;
}
function GunModelRender_New(renderinstance,gunitem,gunstack,model,entity,type,data){
	return false;//�����true�ɂ���ƒʏ�̃p�[�c�`�悪�~�܂�
}

function GunModelRender_New_post(renderinstance,gunitem,gunstack,model,entity,type,data){
}

function update_onplayer(ins, itemstack, nbt, entity){
}
function update_all(ins, itemstack, nbt, entity){
}
function update_onmaid(ins, itemstack, nbt, entity){
}
function update_onliving(ins, itemstack, nbt, entity){
}
function update_onplacedGun(ins, itemstack, nbt, entity){
}
function proceedcock(ins, itemstack, nbt, entity){
}
function startreload(ins, itemstack, nbt, entity){
}
function prefire(ins, itemstack, nbt, entity){
}
function fireout(ins, itemstack, nbt, entity){
}
function proceedreload(ins, itemstack, nbt, entity){
}
function GUI_rendering_2D(ins , gunItem , gunstack){
	return true;//�����true�ɂ���ƒʏ�̏��\��GUI��������
}
function GUI_rendering_3D(ins , gunItem , gunstack){
	return true;//�����true�ɂ���ƒʏ�̃}�[�J�[/�X�R�[�v�e�N�X�`����������
}
function preInit(event){
}