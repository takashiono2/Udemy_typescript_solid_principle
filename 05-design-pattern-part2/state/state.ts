export {}

interface UserState {
    isAuthenticated(): boolean;
    displayPage(): void;
    nextState(): UserState;
}

class AuthorizedState implements UserState {
    isAuthenticated(): boolean{
        return true;
    };

    displayPage(): void{
        console.log("TOPページ");
    }

    nextState(): UserState{
        return new UnAuthorizedState();
    };
}

class UnAuthorizedState implements UserState {
    isAuthenticated(): boolean{
        return false;
    };

    displayPage(): void{
        console.log("エラーページ: 認証されていません");
    }

    nextState(): UserState{
        return new AuthorizedState();
    };
}



class User {
    private state:UserState = new UnAuthorizedState();

    isAuthenticated(): boolean{
        return this.state.isAuthenticated();
    };

    displayPage(): void{
        this.state.displayPage();
    };

    switchState(){
        this.state =  this.state.nextState();
    };
}

function run() {
    const user = new User();
    console.log(user.isAuthenticated());
    user.displayPage();

    user.switchState();
    console.log(user.isAuthenticated());
    user.displayPage();
}

run();
