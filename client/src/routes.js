/**
 * Created by chuck7 on 16/8/22.
 */
import List from 'components/PostList.vue'
import Post from 'components/Post.vue'
import Tag from 'components/Tag.vue'
export default (router)=>{
  router.map({
    '/posts':{
      component: List
    },
    '/posts/:postId':{
      component: Post
    },
    '/tags':{
      component: Tag
    },
  })
  router.redirect({
    '*': '/posts'
  })
}
