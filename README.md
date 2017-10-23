<img src="http://bit.ly/2mxmKKI" width="500" alt="Hapiness" />
<div>
    <a href="https://www.typescriptlang.org/docs/tutorial.html">
        <img src="https://cdn-images-1.medium.com/max/800/1*8lKzkDJVWuVbqumysxMRYw.png"
             align="right" alt="Typescript logo" width="50" height="50" style="border:none;" />
    </a>
    <a href="http://reactivex.io/rxjs">
        <img src="http://reactivex.io/assets/Rx_Logo_S.png"
             align="right" alt="ReactiveX logo" width="50" height="50" style="border:none;" />
    </a>
    <a href="http://hapijs.com">
        <img src="http://bit.ly/2lYPYPw"
             align="right" alt="Hapijs logo" width="75" style="border:none;" />
    </a>
    <a href="https://www.angular.io">
            <img src="https://angular.io/assets/images/logos/angular/angular.svg"
                 align="right" alt="Angular logo" width="75" style="border:none; margin-top:-5px;" />
        </a>
</div>

# NG-Universal & Anguar-CLI minimal starter

> This demo is built following the [NG-Universal & Anguar-CLI guide](https://github.com/hapinessjs/ng-universal-module)

<hr />

## Installation

```bash
$ yarn install
```

<hr />

## Development (Client-side only rendering)

run `yarn run start` which will start `ng serve` (project served at the standard: localhost:4200)

<hr />

## Production

run `yarn run build:dynamic`. All of the files that need to be served will be found within the `/dist` folder.

<hr />

## Testing Universal builds -Locally-

`yarn run serve:dynamic`

Compiles your application and spins up a `Hapiness` application to dynamically serve your `Universal` application on `http://localhost:4000`.
