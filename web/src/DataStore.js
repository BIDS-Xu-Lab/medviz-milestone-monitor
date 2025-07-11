import { defineStore } from 'pinia';
import { useToast } from "primevue/usetoast";

export const useDataStore = defineStore('m3', {

state: () => ({
    // current current_view
    current_view: 'home',

    // the config for app
    app_config: null,

    // the config for user
    config: {
        openai_api_key: null,
        openai_model_name: 'gpt-4.1-nano',
        endpoint: null,
    },

    // other system related data
    toast: useToast(),

    // current user
    user: {
        uid: 'uid001',
        name: 'Lisa'
    },

    // status of the system
    status: {
        // settings panel visibility
        flag_settings_panel_visible: false,

        // true if the system is busy
        busy: false,

    },
}),

getters: {
    
},

actions: {
    showGuide() {
        this.msg('This is a guide message', 'Guide', 'info');
    },

    setFullscreen() {
        // set the fullscreen mode
        document.documentElement.requestFullscreen();
    },

    init() {
        // load the settings from local storage
        this.loadSettingsFromLocalStorage();
    },

    ///////////////////////////////////////////////////////
    // Settings related
    ///////////////////////////////////////////////////////
    updateSettingsByJSON: function(json) {
        // copy the items from json to store.config
        for (let key in this.config) {
            if (json.hasOwnProperty(key)) {
                this.config[key] = json[key];
            }
        }
    },

    saveSettingsToLocalStorage: function() {
        localStorage.setItem(
            "config",
            JSON.stringify(this.config)
        );

        // also update the Goku instance using the new settings
        Goku.init(this.config);

        console.log('* saved config to local storage');
        this.msg('Settings saved', 'Settings', 'info');
    },

    loadSettingsFromLocalStorage: function() {
        // just load the object from localstorage
        let x = localStorage.getItem('config');

        if (x == null) {
            console.log('* not found config from local');
            return;
        }

        // parse the JSON
        let cfg = JSON.parse(x);
        console.log('* local storage config:', cfg);

        this.updateSettingsByJSON(cfg);

        console.log('* loaded config from local storage');
    },

    clearSettingsFromLocalStorage: function() {
        localStorage.removeItem('config');
        this.msg('Settings cleared', 'Settings', 'info');
    },

    msg(
        message, 
        title='Message', 
        type='info',
        life=3000
    ) {
        this.toast.add({
            detail: message,
            summary: title,
            severity: type,
            life: life
        });
    },
}
});