<template>
    <div>
        <a-button type="primary" @click="navTo">regist</a-button>
        <br />
        <a-button type="primary" @click="back">back</a-button>
        <br />
        <a-button type="primary" @click="submit">submit</a-button>
        <br />
        <a-button type="primary" @click="submit2">submit2</a-button>
    </div>
</template>
<script>
import request from "../../utils/request";
export default {
    methods: {
        navTo() {
            console.log(this);
            console.log(this.$router);
            console.log(this.$route);
            console.log(this.$router.push);
            this.$router.push({ name: "Regist" });
            // this.$root.push({ name: "Regist" });
        },
        back() {
            this.$router.back();
        },
        submit() {
            request({
                url: "qr/code/select/all",
                method: "get",
            }).then((rtn) => {
                console.log(rtn);
            });
        },
        submit2() {
            this.$router.push({ name: "baseCard" });
            this.$http.get("qr/code/select/all").then((rtn) => {
                console.log(rtn);
            });
        },
    },
};
</script>
