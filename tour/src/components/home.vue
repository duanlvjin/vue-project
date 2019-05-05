<template>
    <div class="home">
       <banner></banner>
       <homenav></homenav>
       <photo></photo>
       <list></list>
       <more></more>
    </div>
</template>
<script>
import homenav from './homenav.vue';
import banner from './banner.vue';
import photo from './photo.vue';
import list from './list.vue';
import more from './more.vue';
export default {
    components: {
        homenav,banner,photo,list,more
    }
}
</script>

