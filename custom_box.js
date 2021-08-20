AFRAME.registerComponent('new_box', {
    schema: {
        message: { type: 'string', default: "New Box has been Loaded" },
        speed_x: { type: "number", default: 10 },
        rotation_x: { type: "number", default: 10 }
    },

    init: function () {
        console.log(this.data.message);
    },

    tick: function () {
        // Do something on every scene tick or frame.
        this.data.speed_x = this.data.speed_x + 0.1;
        this.data.rotation_x = this.data.rotation_x + 2;

        var position = this.el.getAttribute("position")
        position.x = this.data.speed_x
        var rotation = this.el.getAttribute("rotation")
        rotation.x = this.data.rotation_x
        rotation.y = this.data.rotation_x
        rotation.z = this.data.rotation_x

        this.el.setAttribute("position", { x: position.x, y: position.y, z: position.z })
        this.el.setAttribute("rotation", { x: rotation.x, y: rotation.y, z: rotation.z })
    }
});
