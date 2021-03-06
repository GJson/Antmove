const { useReducer } = require("@amove/next");
const path = require("path");
const fs = require("fs-extra");
useReducer({
    PageJs (node, store) {
        let output =
            path.join(store.config.output, node.body._node.projectPath) + ".js";
        this.$node.content = fs.readFileSync(
            node.body._node.path + ".js",
            "utf8"
        );
        this.$node.dist = output;
        this.addChild("processComponentIs");
        this.addChild("MiniApplication");
        this.addChild({
            type: "ProcessBabel",
            key: node.path + "ProcessBabel",
            path: node.path,
            body: node.body,
            dist: output,
        });
    },
});
