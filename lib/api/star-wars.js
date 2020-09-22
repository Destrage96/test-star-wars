export default $axios => ({
    async fetchList(type, page) {
        try {
            const list = await $axios.$get(type + '/?page=' + page);
            if (typeof (list) === 'object') {
                return {
                    list: Object.values(list),
                };
            }
            return null;
        } catch (error) {
            throw error;
        }
    },

    async searchStarWars(type, query) {
        try {
            let list = null;
            list = await $axios.$get(type + '/?search=' + query);
            if (typeof (list) === 'object') {
                return {
                    list: Object.values(list),
                };
            }
            return null;
        } catch (error) {
            throw error;
        }
    },
});
