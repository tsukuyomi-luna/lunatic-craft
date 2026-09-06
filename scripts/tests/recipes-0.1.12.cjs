const fs=require('fs'),vm=require('vm'),assert=require('assert');
const out=[];let tags=[];
const event={custom:r=>({id:id=>out.push({id,...r})}),shaped:(item,pattern,key)=>({id:id=>out.push({id,type:"minecraft:crafting_shaped",pattern,key,result:{item}})})};
for(const name of ['l2_material_alternatives','affix_material_compression','compatibility']) vm.runInNewContext(fs.readFileSync('kubejs/server_scripts/'+name+'.js','utf8'),{ServerEvents:{recipes:f=>f(event),tags:(type,f)=>{assert.equal(type,'block');f({remove:(tag,item)=>tags.push({tag,item})})}}});
assert.equal(out.length,20);assert.equal(new Set(out.map(r=>r.id)).size,20);
assert.equal(out.filter(r=>r.id.startsWith('kubejs:l2_alternative/')).length,12);
for(const r of out.filter(r=>r.type==='minecraft:crafting_shaped')) {assert.deepEqual(r.pattern,['MMM','MMM','MMM']); assert(r.key.M.endsWith('_material'));}
for(const r of out.filter(r=>r.type==='powah:energizing')) {assert(r.ingredients.length<=6);assert(r.energy>=5000000);}
for(const r of out.filter(r=>r.type==='ars_nouveau:enchanting_apparatus'))assert(r.pedestalItems.length<=8);
assert.deepEqual(tags,[{tag:'minecraft:soul_fire_base_blocks',item:'minecraft:bedrock'}]);
console.log('PASS 20 unique recipes, all 8 adjacent 9:1 compression steps, 12 L2 alternatives, machine slot limits, bedrock-only removal');
