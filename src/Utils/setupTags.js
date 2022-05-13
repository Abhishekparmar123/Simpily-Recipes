function setupTags(recipes) {
    // console.log("utils bolta bhai");
    // console.log(recipes);
    let allTag = {}
    recipes.forEach(recipe => {
        recipe.content.tags.forEach( tag =>{
            if(allTag[tag]){
                allTag[tag] = allTag[tag]+1
            }
            else{
                allTag[tag] = 1
            }
        })
    });
    const newTags = Object.entries(allTag).sort((a, b) =>{
        const [firstTag] = a;
        const [secondTag] = b;

        return firstTag.localeCompare(secondTag)
    })
    // console.log(newTags)
    return newTags;
}

export default setupTags