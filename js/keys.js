AFRAME.registerComponent("keys",{
    init: function(){
        this.key();
    },

    key: function(){
        var key1
        var key2
        var key3
        var key4

        key1.createElement("a-entity");
        key2.createElement("a-entity");
        key3.createElement("a-entity");
        key4.createElement("a-entity");
        
        key1.setAttribute("id", "key1");
        key1.setAttribute("gltf-model", "./assets/keys/key1/scene.gltf");
        key1.setAttribute("position", {x: 27, y: 2, z: 52});

        key2.setAttribute("id", "key2");
        key2.setAttribute("gltf-model", "./assets/keys/key2/scene.gltf");
        key2.setAttribute("position", {x: -30, y: 2, z: -23});

        key3.setAttribute("id", "key3");
        key3.setAttribute("gltf-model", "./assets/keys/key3/scene.gltf");
        key3.setAttribute("position", {x: 40, y: 2, z: -52});

        key4.setAttribute("id", "key4");
        key4.setAttribute("gltf-model", "./assets/keys/key4/scene.gltf");
        key4.setAttribute("position", {x: -86, y: 2, z: 56});
    }
})

// key1 pos "27 0 52"
// key2 pos "-30 0 -23"
// key3 pos "40 0 -52"
// key4 pos "-86 0 56"