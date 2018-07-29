//Import

//Action
    const TIMER_START = 'TIMER_START';
    const TIMER_RESTART = 'TIMER_RESTART';
    const ADD_SECOND = 'ADD_SECOND';

//Action Creators
    function timerStart(){
        return{
            type:TIMER_START
        }
    }
    function timerRestart(){
        return{
            type:TIMER_RESTART
        }
    }
    function addSecond(){
        return{
            type:ADD_SECOND
        }
    }

//Reducer

    const TIMER_DURATION = 3600;

    const initialState ={
        isPlaying : false,
        elapsedTime : 0,
        maxTime : TIMER_DURATION
    };

    function reducer(state = initialState, action){
        switch(action.type){
            case TIMER_START:
                return applyStartTimer(state);
            case TIMER_RESTART:
                return applyRestartTimer(state);
            case ADD_SECOND:
                return applyAddSecond(state);
            default:
                return state;
        }
    }

//Reducer Function

    function applyStartTimer(state){
        return{
            ...state,
            isPlaying:true
        }
    }
    function applyRestartTimer(state){
        return{
            ...state,
            isPlaying:false,
            elapsedTime:0
        }
    }
    function applyAddSecond(state){
        const { elapsedTime } = state;
        if(elapsedTime < TIMER_DURATION){
            return{
                ...state,
                elapsedTime : elapsedTime + 1
            }
        }else{
            return{
                ...state,
                isPlaying:false
            }
        }
    }

//Export Action Creators
    const actionCreators ={
        timerStart,
        timerRestart,
        addSecond
    };

    export {actionCreators};

//Export Reducer
    export default reducer;