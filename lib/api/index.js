import starWars from '../api/star-wars';

export default $axios => ({
    starWars: starWars($axios),
})
