import { CreateComponent } from './components/create.component'
import { FavoriteComponent } from './components/favorite.component'
import { HeaderComponent } from './components/header.component'
import { NavigationComponent } from './components/navigation.component'
import { PostsComponent } from './components/posts.component'

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')

const create = new CreateComponent('create')
const posts = new PostsComponent('posts')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
  { name: 'create', component: create },
  { name: 'posts', component: posts },
  { name: 'favorite', component: favorite },
])
