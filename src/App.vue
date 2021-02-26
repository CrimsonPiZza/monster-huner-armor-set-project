<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name : "App",
    methods: {
      ...mapActions(["authAction"])
    },
    mounted(){
      this.authAction()
    }
  }
</script>

<style>
/* Custom File Wrapper */
.file-field {
    position: relative
  }
  
.file-field .file-path-wrapper {
    height: 2.5rem;
    padding-left: 10px;
    overflow: hidden
}

.file-field input.file-path {
    width: 100%;
    height: 36px
}

.file-field .btn {
    float: left
}

.file-field span {
    cursor: pointer
}

.file-field input[type=file] {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    cursor: pointer;
    filter: alpha(opacity=0);
    opacity: 0
}


.file-field input[type=file]::-webkit-file-upload-button {
    display: none
}

.file-field .file-path-wrapper {
    height: 2.5rem;
    padding-left: 10px;
    overflow: hidden
  }
  
.file-field input.file-path {
    width: 100%;
    height: 36px
}

.md-form .validate {
    margin-bottom: 2.5rem;
}
/* Custom Btn-Floating */
.btn-floating {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .18), 0 4px 15px 0 rgba(0, 0, 0, .15);
    transition: all .2s ease-in-out;
    width: 47px;
    height: 47px
  }
  
.btn-floating i {
  font-size: 1.25rem;
  line-height: 47px;
  display: inline-block;
  width: inherit;
  color: #fff;
  text-align: center
}

.btn-floating:hover {
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19)
}

.btn-floating:before {
  border-radius: 0
}

.btn-rounded,
.counter {
  border-radius: 10em
}

.btn-floating.btn-sm {
  width: 36.15px;
  height: 36.15px
}

.btn-floating.btn-sm i {
  font-size: .96154rem;
  line-height: 36.15px
}

.btn-floating.btn-lg {
  width: 61.1px;
  height: 61.1px
}

.btn-floating.btn-lg i {
  font-size: 1.625rem;
  line-height: 61.1px
}

.fixed-action-btn {
  position: fixed;
  right: 35px;
  bottom: 35px;
  z-index: 998;
  padding-top: 15px;
  margin-bottom: 0
}

.fixed-action-btn ul {
  position: absolute;
  right: 0;
  bottom: 64px;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 64px;
  padding: 0;
  margin: 0 0 15px;
  text-align: center;
  transition: .4s height
}

.fixed-action-btn ul li {
  z-index: 0;
  display: flex;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto
}

.fixed-action-btn ul a.btn-floating {
  opacity: 0;
  transition-duration: .4s;
  transform: scale(.4) translate(0)
}

.fixed-action-btn ul a.btn-floating.shown {
  opacity: 1;
  transform: scale(1) translate(0)
}

.fixed-action-btn.active ul {
  height: 300px
}

[type=reset],
[type=submit],
button,
html [type=button] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none
}
</style>
