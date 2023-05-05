const SPECIALS = [
    { name:'Salt', price:'$0.99', url:'https://live.staticflickr.com/22/27476159_922598f0f5_b.jpg' },
    { name:'Pepper', price:'$2.49', url:'https://live.staticflickr.com/191/449547916_ce1c87adeb_b.jpg' },
    { name:'Tomato Sauce', price:'$3.50', url:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fresh_Tomato_Sauce_%28Unsplash%29.jpg/640px-Fresh_Tomato_Sauce_%28Unsplash%29.jpg' },
    { name:'Worchestershire Sauce', price:'$4.20', url:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Worcester_Sauce_001.jpg' }
];

var vueinst = new Vue({
    el: '#app',
    data() {
        return{
            // 1_1
            choose: 'Choose ...',
            // 1_2
            special : SPECIALS[0],
            // 1_3
            show_ad: true,
            //1 _4
            dark_mode: false,
            // 1_5
            top_menu: [
                { title:'Home', url:'/', submenus: [] },
                { title:'About', url:'/about',
                    submenus: [
                        { title:'Who we are',   url:'/about#us' },
                        { title:'What we do',   url:'/about#store' },
                        { title:'Our range',     url:'/about#range' }
                    ]
                },
                { title:'Contact Us',   url:'/contact',
                    submenus: [
                        { title:'Information',   url:'/contact#info' },
                        { title:'Returns',   url:'/contact#return' },
                        { title:'Locate Us',     url:'/contact#locate' }
                    ]
                }
            ],
            // 1_6
            c_text: 'type your comment here',
            c_arr: [],
            // 1_7
            top_menu_item: 0,
            top_menu_hover: false


        };
    },
    computed: {
        dark_mode_func: function() {
            return {'app_dark_mode' : this.dark_mode}
        },
        dark_mode_button_func_off: function(){
            return {
                ' pure-button-active' : !this.dark_mode,
            }
        },
        dark_mode_button_func_on: function() {
            return {
                'pure-button-active': this.dark_mode,
                'pure-button-primary': this.dark_mode,
            }

        },

    },
    methods: {
        comment_fun : function () {
            this.c_arr.push(this.c_text);
        },
        sub_menu_fun: function(index) {
            this.top_menu_hover = true;
            this.top_menu_item = index;
        }
    }

});
