var __extends = this.__extends || function(_0xfbe7x2, _0xfbe7x3) {
    for (var _0xfbe7x4 in _0xfbe7x3) {
        if (_0xfbe7x3.hasOwnProperty(_0xfbe7x4)) {
            _0xfbe7x2[_0xfbe7x4] = _0xfbe7x3[_0xfbe7x4]
        }
    };

    function _0xfbe7x5() {
        this.constructor = _0xfbe7x2
    }
    _0xfbe7x5.prototype = _0xfbe7x3.prototype;
    _0xfbe7x2.prototype = new _0xfbe7x5()
};
var Fish = (function(_0xfbe7x7) {
    __extends(Fish, _0xfbe7x7);

    function Fish(_0xfbe7x8) {
        _0xfbe7x7.call(this, _0xfbe7x8);
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._level = 0;
        this._speed = null;
        this._type = 'null';
        this._beta = 0;
        this._base = 0;
        this._gain = 0
    }
    Object.defineProperty(Fish.prototype, 'type', {
        get: function() {
            return this._type
        },
        set: function(_0xfbe7x9) {
            this._type = _0xfbe7x9
        }
    });
    Object.defineProperty(Fish.prototype, 'level', {
        get: function() {
            return this._level
        },
        set: function(_0xfbe7x9) {
            this._level = _0xfbe7x9
        }
    });
    Object.defineProperty(Fish.prototype, 'speed', {
        get: function() {
            return this._speed
        },
        set: function(_0xfbe7x9) {
            this._speed = _0xfbe7x9
        }
    });
    Object.defineProperty(Fish.prototype, 'base', {
        get: function() {
            return this._base
        },
        set: function(_0xfbe7x9) {
            this._base = _0xfbe7x9
        }
    });
    Object.defineProperty(Fish.prototype, 'beta', {
        get: function() {
            return this._beta
        },
        set: function(_0xfbe7x9) {
            this._beta = _0xfbe7x9
        }
    });
    Object.defineProperty(Fish.prototype, 'gain', {
        get: function() {
            return this._gain
        },
        set: function(_0xfbe7x9) {
            this._gain = _0xfbe7x9
        }
    });
    return Fish
})(PIXI.Sprite);
var Shark = (function(_0xfbe7x7) {
    __extends(Shark, _0xfbe7x7);

    function Shark(_0xfbe7xb) {
        _0xfbe7x7.call(this, _0xfbe7xb);
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this._scale = 1;
        this._elapsed = 0;
        this._duration = 100;
        this._tweening = false;
        this._direction = 1;
        this._startScale = 1;
        this._endScale = 1;
        this.target = {
            x: 0,
            y: 0
        };
        this._level = 0.2
    }
    Shark.prototype.resetProps = function() {
        this.gotoAndStop(1);
        if (this._tweening) {
            this.stopTween()
        };
        this.size = 0.2;
        this.level = 0.2
    };
    Shark.prototype.scaleUp = function() {
        if (this._tweening) {
            this.size = this._startScale + this._endScale
        };
        if (this._level < 1) {
            this.scaleTo(this._level)
        }
    };
    Shark.prototype.scaleTo = function(_0xfbe7x9) {
        this._elapsed = 0;
        this._startScale = this.size;
        this._endScale = _0xfbe7x9 - this.size;
        if (!this._tweening) {
            this.startTween()
        }
    };
    Shark.prototype.startTween = function() {
        this._tweening = true;
        PIXI.ticker.shared.add(this.tweenUpdate, this)
    };
    Shark.prototype.stopTween = function() {
        this._tweening = false;
        PIXI.ticker.shared.remove(this.tweenUpdate, this)
    };
    Shark.prototype.tweenUpdate = function(_0xfbe7xc) {
        this._elapsed += 1;
        var _0xfbe7xd = this._elapsed / this._duration;
        if (_0xfbe7xd >= 1) {
            _0xfbe7xd = 1;
            this._elapsed = 0;
            this.stopTween()
        };
        var _0xfbe7xe = this._startScale + Transition(_0xfbe7xd) * this._endScale;
        this.size = _0xfbe7xe
    };
    Object.defineProperty(Shark.prototype, 'size', {
        get: function() {
            return this._scale
        },
        set: function(_0xfbe7x9) {
            this._scale = this.scale.y = _0xfbe7x9;
            this.scale.x = this._scale * this._direction
        }
    });
    Object.defineProperty(Shark.prototype, 'level', {
        get: function() {
            return this._level
        },
        set: function(_0xfbe7x9) {
            this._level = _0xfbe7x9
        }
    });
    Object.defineProperty(Shark.prototype, 'direction', {
        get: function() {
            return this._direction
        },
        set: function(_0xfbe7x9) {
            this._direction = _0xfbe7x9;
            this.scale.x = this._scale * this._direction
        }
    });
    Transition = function(_0xfbe7xd) {
        if (_0xfbe7xd <= 0) {
            return 0
        };
        if (_0xfbe7xd >= 0.4) {
            return 1.0
        };
        return Math.pow(2.0, -5.5680 * _0xfbe7xd) * Math.sin(11.6616 * _0xfbe7xd - 1.571) * 0.955 + 0.955
    };
    return Shark
})(PIXI.extras.MovieClip);
this.colisions = this.colisions || {};
(function() {
    var _0xfbe7xf = document.createElement('canvas');
    _0xfbe7xf.style.position = 'absolute';
    _0xfbe7xf.style.left = '200px';
    var _0xfbe7x10 = _0xfbe7xf.getContext('2d');
    _0xfbe7x10.save();
    var _0xfbe7x11 = document.createElement('canvas');
    _0xfbe7x11.style.position = 'absolute';
    var _0xfbe7x12 = _0xfbe7x11.getContext('2d');
    _0xfbe7x12.save();
    var _0xfbe7x13 = [];
    var _0xfbe7x14 = function(_0xfbe7x15, _0xfbe7x16) {
        var _0xfbe7x17, _0xfbe7x18;
        _0xfbe7x17 = _0xfbe7x15.getBounds();
        _0xfbe7x18 = _0xfbe7x16.getBounds();
        return _0xfbe7x37(_0xfbe7x17, _0xfbe7x18)
    };
    colisions.checkRectCollision = _0xfbe7x14;
    var _0xfbe7x19 = function(_0xfbe7x15, _0xfbe7x16) {
        var _0xfbe7x1a, _0xfbe7x1b, _0xfbe7x1c, _0xfbe7x1d, _0xfbe7x1e;
        intersection = _0xfbe7x14(_0xfbe7x15, _0xfbe7x16);
        if (!intersection) {
            return false
        };
        _0xfbe7xf.width = intersection.width;
        _0xfbe7xf.height = intersection.height;
        _0xfbe7x11.width = intersection.width;
        _0xfbe7x11.height = intersection.height;
        _0xfbe7x10 = _0xfbe7xf.getContext('2d');
        _0xfbe7x12 = _0xfbe7x11.getContext('2d');
        _0xfbe7x1c = _0xfbe7x1f(intersection, _0xfbe7x15, _0xfbe7x10, 1);
        _0xfbe7x1d = _0xfbe7x1f(intersection, _0xfbe7x16, _0xfbe7x12, 2);
        if (!_0xfbe7x1c || !_0xfbe7x1d) {
            return false
        };
        _0xfbe7x1e = _0xfbe7x27(_0xfbe7x1c, _0xfbe7x1d, intersection.width, intersection.height, 0);
        if (_0xfbe7x1e) {
            _0xfbe7x1e.x += intersection.x;
            _0xfbe7x1e.x2 += intersection.x;
            _0xfbe7x1e.y += intersection.y;
            _0xfbe7x1e.y2 += intersection.y
        } else {
            return false
        };
        return _0xfbe7x1e
    };
    colisions.checkPixelCollision = _0xfbe7x19;
    var _0xfbe7x1f = function(_0xfbe7x1b, _0xfbe7x20, _0xfbe7x21, _0xfbe7x22) {
        if (!_0xfbe7x21.canvas.width || !_0xfbe7x21.canvas.height) {
            return null
        };
        var _0xfbe7x23, _0xfbe7x24, _0xfbe7x25, _0xfbe7x26;
        _0xfbe7x24 = _0xfbe7x20.texture.baseTexture.source;
        _0xfbe7x23 = {
            x: _0xfbe7x1b.x,
            y: _0xfbe7x1b.y
        };
        _0xfbe7x21.restore();
        _0xfbe7x21.save();
        _0xfbe7x21.scale(_0xfbe7x20.scale.x, _0xfbe7x20.scale.y);
        _0xfbe7x21.translate((_0xfbe7x20.x - _0xfbe7x1b.x - _0xfbe7x20.width / 2) / _0xfbe7x20.scale.x, (_0xfbe7x20.y - _0xfbe7x1b.y - _0xfbe7x20.height / 2) / _0xfbe7x20.scale.y);
        _0xfbe7x21.drawImage(_0xfbe7x24, 0, 0, _0xfbe7x24.width, _0xfbe7x24.height);

        return _0xfbe7x21.getImageData(0, 0, _0xfbe7x1b.width, _0xfbe7x1b.height).data
    };
    var _0xfbe7x27 = function(_0xfbe7x1c, _0xfbe7x1d, _0xfbe7x28, _0xfbe7x29, _0xfbe7x2a) {
        var _0xfbe7x2b, _0xfbe7x2c, _0xfbe7x2d, _0xfbe7x2e, _0xfbe7x2f = 3,
            _0xfbe7x30 = {
                x: Infinity,
                y: Infinity,
                x2: -Infinity,
                y2: -Infinity
            };
        for (_0xfbe7x2e = 0; _0xfbe7x2e < _0xfbe7x29; ++_0xfbe7x2e) {
            for (_0xfbe7x2d = 0; _0xfbe7x2d < _0xfbe7x28; ++_0xfbe7x2d) {
                _0xfbe7x2b = _0xfbe7x1c.length > _0xfbe7x2f + 1 ? _0xfbe7x1c[_0xfbe7x2f] / 255 : 0;
                _0xfbe7x2c = _0xfbe7x1d.length > _0xfbe7x2f + 1 ? _0xfbe7x1d[_0xfbe7x2f] / 255 : 0;
                if (_0xfbe7x2b > _0xfbe7x2a && _0xfbe7x2c > _0xfbe7x2a) {
                    return {
                        x: _0xfbe7x2d,
                        y: _0xfbe7x2e,
                        width: 1,
                        height: 1
                    }
                };
                _0xfbe7x2f += 4
            }
        };
        if (_0xfbe7x30.x != Infinity) {
            _0xfbe7x30.width = _0xfbe7x30.x2 - _0xfbe7x30.x + 1;
            _0xfbe7x30.height = _0xfbe7x30.y2 - _0xfbe7x30.y + 1;
            return _0xfbe7x30
        };
        return null
    };
    var _0xfbe7x31 = function(_0xfbe7x32, _0xfbe7x33, _0xfbe7x34) {
        _0xfbe7x34 = _0xfbe7x34 || '+';
        if (_0xfbe7x32.parent && _0xfbe7x32.parent[_0xfbe7x33]) {
            var _0xfbe7x35 = _0xfbe7x32[_0xfbe7x33];
            var _0xfbe7x36 = _0xfbe7x31(_0xfbe7x32.parent, _0xfbe7x33, _0xfbe7x34);
            if (_0xfbe7x34 == '*') {
                return _0xfbe7x35 * _0xfbe7x36
            } else {
                return _0xfbe7x35 + _0xfbe7x36
            }
        };
        return _0xfbe7x32[_0xfbe7x33]
    };
    var _0xfbe7x37 = function(_0xfbe7x38, _0xfbe7x39) {
        var _0xfbe7x3a, _0xfbe7x3b, _0xfbe7x3c = {},
            _0xfbe7x3d = {};
        _0xfbe7x3c.cx = _0xfbe7x38.x + (_0xfbe7x3c.hw = (_0xfbe7x38.width / 2));
        _0xfbe7x3c.cy = _0xfbe7x38.y + (_0xfbe7x3c.hh = (_0xfbe7x38.height / 2));
        _0xfbe7x3d.cx = _0xfbe7x39.x + (_0xfbe7x3d.hw = (_0xfbe7x39.width / 2));
        _0xfbe7x3d.cy = _0xfbe7x39.y + (_0xfbe7x3d.hh = (_0xfbe7x39.height / 2));
        _0xfbe7x3a = Math.abs(_0xfbe7x3c.cx - _0xfbe7x3d.cx) - (_0xfbe7x3c.hw + _0xfbe7x3d.hw);
        _0xfbe7x3b = Math.abs(_0xfbe7x3c.cy - _0xfbe7x3d.cy) - (_0xfbe7x3c.hh + _0xfbe7x3d.hh);
        if (_0xfbe7x3a < 0 && _0xfbe7x3b < 0) {
            _0xfbe7x3a = Math.min(Math.min(_0xfbe7x38.width, _0xfbe7x39.width), -_0xfbe7x3a);
            _0xfbe7x3b = Math.min(Math.min(_0xfbe7x38.height, _0xfbe7x39.height), -_0xfbe7x3b);
            return {
                x: Math.max(_0xfbe7x38.x, _0xfbe7x39.x),
                y: Math.max(_0xfbe7x38.y, _0xfbe7x39.y),
                width: Math.ceil(_0xfbe7x3a),
                height: Math.ceil(_0xfbe7x3b),
                rect1: _0xfbe7x38,
                rect2: _0xfbe7x39
            }
        } else {
            return null
        }
    };
    colisions.calculateIntersection = _0xfbe7x37
}());
window.init = {
    bitmaps: {
        bg1: 'assets/bg1.png',
        bg2: 'assets/bg2.png',
        bg3: 'assets/bg3.png',
        ryba1s: 'assets/ryba1s.png',
        ryba1: 'assets/ryba1.png',
        ryba2s: 'assets/ryba2s.png',
        ryba2: 'assets/ryba2.png',
        ryba3s: 'assets/ryba3s.png',
        ryba3: 'assets/ryba3.png',
        ryba4s: 'assets/ryba4s.png',
        ryba4: 'assets/ryba4.png',
        ryba5s: 'assets/ryba5s.png',
        ryba5: 'assets/ryba5.png',
        ryba7s: 'assets/ryba7s.png',
        ryba7: 'assets/ryba7.png',
        ryba8s: 'assets/ryba8s.png',
        ryba8: 'assets/ryba8.png',
        ryba9s: 'assets/ryba9s.png',
        ryba9: 'assets/ryba9.png',
        ryba1s2: 'assets/ryba1s2.png',
        ryba2s2: 'assets/ryba2s2.png',
        ryba3s2: 'assets/ryba3s2.png',
        ryba4s2: 'assets/ryba4s2.png',
        ryba5s2: 'assets/ryba5s2.png',
        ryba7s2: 'assets/ryba7s2.png',
        meduza: 'assets/meduza.png',
        mine: 'assets/mina.png',
        shark_1: 'assets/shark_01.png',
        shark_2: 'assets/shark_02.png',
        shark_3: 'assets/shark_03.png',
        shark_4: 'assets/shark_04.png',
        shark_5: 'assets/shark_05.png',
        hitArea: 'assets/hitArea.png',
        hitAreaBody: 'assets/hitAreaBody.png',
        bubble: 'assets/bublinka3.png',
        marine: 'assets/ponorka.png',
        siluete: 'assets/siluet.png',
        ad_bg: 'assets/ad/bg.png',
        ad_btn_up: 'assets/ad/watch_button.png',
        ad_btn_down: 'assets/ad/watch_button_click.png',
        ad_no: 'assets/ad/nope.png',
        taptostart: 'assets/ad/tap_to_play.png',
        o_1: 'assets/outlines/1.png',
        o_1s: 'assets/outlines/1s.png',
        o_1s2: 'assets/outlines/1s2.png',
        o_2: 'assets/outlines/2.png',
        o_2s: 'assets/outlines/2s.png',
        o_2s2: 'assets/outlines/2s2.png',
        o_3: 'assets/outlines/3.png',
        o_3s: 'assets/outlines/3s.png',
        o_3s2: 'assets/outlines/3s2.png',
        o_4: 'assets/outlines/4.png',
        o_4s: 'assets/outlines/4s.png',
        o_4s2: 'assets/outlines/4s2.png',
        o_5: 'assets/outlines/5.png',
        o_5s: 'assets/outlines/5s.png',
        o_5s2: 'assets/outlines/5s2.png',
        o_6: 'assets/outlines/6.png',
        o_6s: 'assets/outlines/6s.png',
        o_6s2: 'assets/outlines/6s2.png',
        o_7: 'assets/outlines/7.png',
        o_7s: 'assets/outlines/7s.png',
        o_7s2: 'assets/outlines/7s2.png',
        o_9: 'assets/outlines/9.png',
        o_9s: 'assets/outlines/9s.png'
    },
    fishes: [{
        bitmap: 'ryba1s2',
        level: 0.1,
        outline: 'o_1s2'
    }, {
        bitmap: 'ryba1s',
        level: 0.12,
        outline: 'o_1s'
    }, {
        bitmap: 'ryba2s2',
        level: 0.14,
        outline: 'o_2s2'
    }, {
        bitmap: 'ryba1',
        level: 0.15,
        outline: 'o_1'
    }, {
        bitmap: 'ryba2s',
        level: 0.16,
        outline: 'o_2s'
    }, {
        bitmap: 'ryba3s2',
        level: 0.18,
        outline: 'o_3s2'
    }, {
        bitmap: 'ryba2',
        level: 0.21,
        outline: 'o_2'
    }, {
        bitmap: 'ryba3s',
        level: 0.22,
        outline: 'o_3s'
    }, {
        bitmap: 'ryba3',
        level: 0.3,
        outline: 'o_3'
    }, {
        bitmap: 'ryba4s2',
        level: 0.32,
        outline: 'o_4s2'
    }, {
        bitmap: 'ryba4s',
        level: 0.37,
        outline: 'o_4s'
    }, {
        bitmap: 'ryba5s2',
        level: 0.42,
        outline: 'o_5s2'
    }, {
        bitmap: 'ryba7s2',
        level: 0.47,
        outline: 'o_7s2'
    }, {
        bitmap: 'ryba4',
        level: 0.5,
        outline: 'o_4'
    }, {
        bitmap: 'ryba5s',
        level: 0.53,
        outline: 'o_5s'
    }, {
        bitmap: 'ryba8s',
        level: 9999,
        outline: null
    }, {
        bitmap: 'ryba9s',
        level: 0.54,
        outline: 'o_9s'
    }, {
        bitmap: 'ryba5',
        level: 0.60,
        outline: 'o_5'
    }, {
        bitmap: 'ryba7s',
        level: 0.61,
        outline: 'o_7s'
    }, {
        bitmap: 'ryba9',
        level: 0.68,
        outline: 'o_9'
    }, {
        bitmap: 'ryba7',
        level: 1.05,
        outline: 'o_7'
    }, {
        bitmap: 'ryba8',
        level: 9999,
        outline: null
    }]
};
var Game = (function() {
    var _0xfbe7x3f = 640;
    var _0xfbe7x40 = 1137;
    var _0xfbe7x41 = {};
    var _0xfbe7x42 = false;
    var _0xfbe7x43 = null;
    var _0xfbe7x44 = false;
    var _0xfbe7x45 = null;
    var _0xfbe7x46 = null;
    var _0xfbe7x47 = true;
    var _0xfbe7x48 = {
        x: 0,
        y: 0
    };

    function _0xfbe7x49() {
        gamee.emitter.addEventListener('pause', function(_0xfbe7x4a) {
            _0xfbe7x53()
        });
        gamee.emitter.addEventListener('resume', function(_0xfbe7x4a) {
            _0xfbe7x52()
        });
        gamee.emitter.addEventListener('mute', function(_0xfbe7x4a) {
            _0xfbe7x51()
        });
        gamee.emitter.addEventListener('unmute', function(_0xfbe7x4a) {
            _0xfbe7x50()
        });
        gamee.gameInit('FullScreen', {}, ['saveState', 'rewardedAds', 'logEvents'], function(_0xfbe7x4b, _0xfbe7x4c) {
            if (_0xfbe7x4b !== null) {
                throw _0xfbe7x4b
            };
            if (!_0xfbe7x4c.sound) {
                _0xfbe7x51()
            };
            var _0xfbe7x4d = _0xfbe7x4c.saveState ? JSON.parse(_0xfbe7x4c.saveState) : {};
            _0xfbe7x4e(_0xfbe7x4d)
        })
    }

    function _0xfbe7x4e(_0xfbe7x4c) {
        for (var _0xfbe7x4f in _0xfbe7x4c) {
            _0xfbe7x41[_0xfbe7x4f] = _0xfbe7x4c[_0xfbe7x4f]
        };
        gamee.emitter.addEventListener('start', function() {
            _0xfbe7x54()
        });
        gamee.gameReady()
    }

    function _0xfbe7x50() {
        if (_0xfbe7x42) {
            _0xfbe7x42 = false;
            Howler.mute(false)
        }
    }

    function _0xfbe7x51() {
        if (!_0xfbe7x42) {
            _0xfbe7x42 = true;
            Howler.mute(true)
        }
    }

    function _0xfbe7x52() {
        game.resume()
    }

    function _0xfbe7x53() {
        game.pause()
    }

    function _0xfbe7x54() {
        game.initVariables()
    }

    function _0xfbe7x55() {}

    function _0xfbe7x56() {}

    function _0xfbe7x57(_0xfbe7x9) {
        gamee.updateScore(_0xfbe7x9)
    }

    function _0xfbe7x58(_0xfbe7x59) {
        console.log('ad loading');
        _0xfbe7x44 = true;
        _0xfbe7x45 = false;
        if (!gamee.loadRewardedVideo) {
            console.log('ad not supported');
            return 0
        };
        gamee.loadRewardedVideo(function(_0xfbe7x4b, _0xfbe7x4c) {
            _0xfbe7x45 = _0xfbe7x4c && _0xfbe7x4c.videoLoaded;
            if (_0xfbe7x59) {
                _0xfbe7x59(_0xfbe7x4c && _0xfbe7x4c.videoLoaded)
            };
            if (!_0xfbe7x45) {
                console.log('ad loading failed: ', _0xfbe7x4b);
                setTimeout(function() {
                    _0xfbe7x58(function() {
                        updateAbilities()
                    })
                }, 60000)
            } else {
                _0xfbe7x44 = false
            }
        })
    }

    function _0xfbe7x5a(_0xfbe7x59, _0xfbe7x5b) {
        if (!_0xfbe7x45) {
            return false
        };
        _0xfbe7x45 = false;
        gamee.showRewardedVideo(function(_0xfbe7x4b, _0xfbe7x4c) {
            let _0xfbe7x5c = _0xfbe7x4c && _0xfbe7x4c.videoPlayed;
            if (_0xfbe7x59) {
                _0xfbe7x59(_0xfbe7x5c)
            };
            if (_0xfbe7x5c) {} else {
                console.log('ad play failed: ', _0xfbe7x4b)
            }
        })
    }

    function _0xfbe7x5d() {
        if (_0xfbe7x43 && _0xfbe7x45) {
            _0xfbe7x5e()
        } else {
            game.endGame()
        }
    }

    function _0xfbe7x5e() {
        var _0xfbe7x5f = new PIXI.Sprite(PIXI.loader.resources.ad_bg.texture);
        _0xfbe7x5f.anchor.x = 0.5;
        _0xfbe7x5f.x = _0xfbe7x3f / 2;
        _0xfbe7x5f.y = _0xfbe7x40 / 4;
        game._stage.addChild(_0xfbe7x5f);
        var _0xfbe7x60 = new PIXI.Sprite(PIXI.loader.resources.ad_btn_up.texture);
        _0xfbe7x60.x = 115 - _0xfbe7x5f.width / 2;
        _0xfbe7x60.y = 216;
        _0xfbe7x60.interactive = true;
        _0xfbe7x60.buttonMode = true;
        _0xfbe7x5f.addChild(_0xfbe7x60);
        _0xfbe7x60.once('mousedown', function() {
            this.interactive = false;
            game._stage.removeChild(_0xfbe7x5f);
            _0xfbe7x5a(function(_0xfbe7x61) {
                if (_0xfbe7x61) {
                    _0xfbe7x43 = false;
                    game.continueLevel()
                } else {
                    game.endGame()
                }
            }, 'game_over')
        });
        _0xfbe7x60.once('touchstart', function() {
            this.interactive = false;
            game._stage.removeChild(_0xfbe7x5f);
            _0xfbe7x5a(function(_0xfbe7x61) {
                if (_0xfbe7x61) {
                    _0xfbe7x43 = false;
                    game.continueLevel()
                } else {
                    game.endGame()
                }
            }, 'game_over')
        });
        var _0xfbe7x62 = new PIXI.Sprite(PIXI.loader.resources.ad_no.texture);
        _0xfbe7x62.x = 212 - _0xfbe7x5f.width / 2;;;
        _0xfbe7x62.y = 353;
        _0xfbe7x62.interactive = true;
        _0xfbe7x62.buttonMode = true;
        _0xfbe7x5f.addChild(_0xfbe7x62);
        _0xfbe7x62.on('mousedown', function() {
            this.interactive = false;
            game._stage.removeChild(_0xfbe7x5f);
            game.endGame()
        });
        _0xfbe7x62.on('touchstart', function(_0xfbe7x63) {
            this.interactive = false;
            game._stage.removeChild(_0xfbe7x5f);
            game.endGame()
        })
    }
    var _0xfbe7x64 = 0;

    function _0xfbe7x65(_0xfbe7x66) {
        _0xfbe7x64 += _0xfbe7x66;
        while (_0xfbe7x64 > 1) {
            _0xfbe7x64--;
            game.update(1)
        }
    }

    function _0xfbe7x67() {
        this._status = 'instance created';
        this._pause = false;
        this._running = false;
        this._t = null;
        this._stage = null;
        this._renderer = null;
        this._paralax1 = null;
        this._paralax2 = null;
        this._touchOffetX = null;
        this._touchOffetY = null;
        this._bodyHitArea = null;
        this._playerHitArea = null;
        this._player = null;
        this._marine = null;
        this._pool = null;
        this._bubbles = null;
        this._shadows = null;
        this._mines = null;
        this._alive = null;
        this._score = 0;
        this._foodProb = null;
        this._mineProb = null;
        this._probRegulation = 0;
        this.eatSound = null;
        this.moveSound = null;
        this.deathSound = null;
        this.bgSound = null;
        this.minesDistance = null;
        this._samePose = null;
        this._generateTime = null;
        this.touchControll = false;
        this.gameWidth = _0xfbe7x3f;
        this.gameHeight = _0xfbe7x40;
        this.loadAssets()
    }
    _0xfbe7x67.prototype.loadAssets = function() {
        this._status = 'preloading';
        this.eatSound = new Howl({
            src: ['assets/sounds/eat.mp3', 'assets/sounds/eat.ogg']
        });
        this.moveSound = new Howl({
            src: ['assets/sounds/move.mp3', 'assets/sounds/move.ogg']
        });
        this.deathSound = new Howl({
            src: ['assets/sounds/death.mp3', 'assets/sounds/death.ogg']
        });
        this.bgSound = new Howl({
            src: ['assets/sounds/see.mp3', 'assets/sounds/see.ogg']
        });
        this.bgSound.loop(true);
        for (var _0xfbe7x4f in init.bitmaps) {
            PIXI.loader.add(_0xfbe7x4f, init.bitmaps[_0xfbe7x4f])
        };
        PIXI.loader.load(this.assetsLoadComplete.bind(this))
    };
    _0xfbe7x67.prototype.createScene = function() {
        console.log(this);
        this._status = 'generating scene';
        this.resize();
        this._stage = new PIXI.Container;
        this._renderer = PIXI.autoDetectRenderer(_0xfbe7x3f, _0xfbe7x40, {
            roundPixels: false,
            resolution: 1,
            antialias: false,
            transparent: true
        });
        this._renderer.view.style.width = '100%';
        this._renderer.view.style.height = '100%';
        document.getElementById('gm4html5_div_id').appendChild(this._renderer.view);
        var _0xfbe7x68 = new PIXI.Sprite(PIXI.loader.resources.bg1.texture);
        _0xfbe7x68.width = _0xfbe7x3f;
        _0xfbe7x68.height = _0xfbe7x40;
        this._stage.addChild(_0xfbe7x68);
        this._paralax1 = new PIXI.extras.TilingSprite(PIXI.loader.resources.bg2.texture, _0xfbe7x3f, 640);
        this._paralax1.anchor.y = 1;
        this._paralax1.y = _0xfbe7x40;
        this._stage.addChild(this._paralax1);
        this._paralax2 = new PIXI.extras.TilingSprite(PIXI.loader.resources.bg3.texture, _0xfbe7x3f, 640);
        this._paralax2.anchor.y = 1;
        this._paralax2.y = _0xfbe7x40;
        this._stage.addChild(this._paralax2);
        var _0xfbe7x69 = [];
        for (var _0xfbe7x22 = 1; _0xfbe7x22 < 6; _0xfbe7x22++) {
            _0xfbe7x69.push(PIXI.loader.resources['shark_' + _0xfbe7x22].texture)
        };
        _0xfbe7x69.push(PIXI.loader.resources.shark_1.texture);
        this._playerHitArea = new PIXI.Sprite(PIXI.loader.resources.hitArea.texture);
        this._playerHitArea.anchor.x = 0.5;
        this._playerHitArea.anchor.y = 0.5;
        this._playerHitArea.alpha = 0;
        this._stage.addChild(this._playerHitArea);
        this._marine = new PIXI.Sprite(PIXI.loader.resources.marine.texture);
        this._marine.x = _0xfbe7x3f * 0.65;
        this._marine.y = _0xfbe7x40 * 0.8;
        this._stage.addChildAt(this._marine, 2);
        this._player = new Shark(_0xfbe7x69);
        this._stage.addChild(this._player);
        this._player.x = 300;
        this._player.y = 200;
        this._player.loop = false;
        this._player.animationSpeed = 0.2;
        this._player.size = 0.2;
        this._stage.interactive = true;
        this._bodyHitArea = new PIXI.Sprite(PIXI.loader.resources.hitAreaBody.texture);
        this._bodyHitArea.anchor.x = 0.5;
        this._bodyHitArea.anchor.y = 0.5;
        this._bodyHitArea.alpha = 0;
        this._stage.addChild(this._bodyHitArea);
        _0xfbe7x46 = new PIXI.Sprite(PIXI.loader.resources.taptostart.texture);
        _0xfbe7x46.visible = false;
        _0xfbe7x46.anchor.set(0.5);
        _0xfbe7x46.x = _0xfbe7x3f / 2;
        _0xfbe7x46.y = _0xfbe7x40 / 2.5;
        this._stage.addChild(_0xfbe7x46);
        /////////
        this.hack = {};
        this.hack.x = new PIXI.Text(this._player.x);
        this.hack.x.x = 50;
        this.hack.x.y = 100;
        this._stage.addChild(this.hack.x);
        this.hack.y = new PIXI.Text(this._player.y);
        this.hack.y.x = 50;
        this.hack.y.y = 150;
        this._stage.addChild(this.hack.y);
        /////////
        var _0xfbe7x6a = PIXI.ticker.shared;
        _0xfbe7x6a.autoStart = false;
        _0xfbe7x6a.stop();
        _0xfbe7x6a.add(this.update, this);
        _0xfbe7x49();
        this.bindEvents()
    };
    _0xfbe7x67.prototype.resize = function() {
        var _0xfbe7x6b = document.getElementById('gm4html5_div_id');
        let _0xfbe7x6c = 0;
        let _0xfbe7x6d = 0;
        var _0xfbe7x6e = window.innerWidth / _0xfbe7x3f;
        var _0xfbe7x6f = window.innerHeight / _0xfbe7x40;
        var _0xfbe7x70 = 0;
        var _0xfbe7x71 = 0;
        if (_0xfbe7x6e < _0xfbe7x6f) {
            _0xfbe7x70 = _0xfbe7x3f * _0xfbe7x6e;
            _0xfbe7x71 = _0xfbe7x40 * _0xfbe7x6e;
            _0xfbe7x6b.style.width = _0xfbe7x70 + 'px';
            _0xfbe7x6b.style.height = _0xfbe7x71 + 'px'
        } else {
            _0xfbe7x70 = _0xfbe7x3f * _0xfbe7x6f;
            _0xfbe7x71 = _0xfbe7x40 * _0xfbe7x6f;
            _0xfbe7x6c = (window.innerWidth - _0xfbe7x70) / _0xfbe7x6f;
            _0xfbe7x3f += _0xfbe7x6c;
            _0xfbe7x6b.style.width = '100%';
            _0xfbe7x6b.style.height = '100%'
        }
    };
    _0xfbe7x67.prototype.bindEvents = function() {
        this._stage.on('touchmove', this.touchMoveHandler.bind(this));
        this._stage.on('mousemove', this.mouseMoveHandler.bind(this));
        this._stage.on('mousedown', function() {
            if (!_0xfbe7x47) {
                _0xfbe7x47 = true;
                _0xfbe7x46.visible = false
            }
        });
        this._stage.on('touchstart', function(_0xfbe7x63) {
            if (!_0xfbe7x47) {
                _0xfbe7x47 = true;
                _0xfbe7x46.visible = false
            };
            _0xfbe7x48.x = _0xfbe7x63.data.global.x;
            _0xfbe7x48.y = _0xfbe7x63.data.global.y
        })
    };
    _0xfbe7x67.prototype.touchMoveHandler = function(_0xfbe7x63) {
        if (!_0xfbe7x47) {
            return
        };
        let _0xfbe7x72 = {
            x: this._player.target.x,
            y: this._player.target.y
        };
        _0xfbe7x72.x += _0xfbe7x63.data.global.x - _0xfbe7x48.x;
        _0xfbe7x72.y += _0xfbe7x63.data.global.y - _0xfbe7x48.y;
        if (_0xfbe7x72.x > 0 && _0xfbe7x72.x < _0xfbe7x3f && _0xfbe7x72.y > 0 && _0xfbe7x72.y < _0xfbe7x40) {
            this.updateTarget(_0xfbe7x72.x, _0xfbe7x72.y)
        };
        _0xfbe7x48.x = _0xfbe7x63.data.global.x;
        _0xfbe7x48.y = _0xfbe7x63.data.global.y
    };
    _0xfbe7x67.prototype.mouseMoveHandler = function(_0xfbe7x63) {
        if (!_0xfbe7x47) {
            return
        };
        var _0xfbe7x73 = _0xfbe7x63.data.global;
        if (_0xfbe7x73.x > 0 && _0xfbe7x73.x < _0xfbe7x3f && _0xfbe7x73.y > 0 && _0xfbe7x73.y < _0xfbe7x40) {
            this.updateTarget(_0xfbe7x73.x, _0xfbe7x73.y)
        }
    };
    _0xfbe7x67.prototype.touchStart = function(_0xfbe7x74, _0xfbe7x75) {
        this.moveSound.play();
        this._touchOffetX = this._player.target.x - (_0xfbe7x74 * _0xfbe7x3f);
        this._touchOffetY = this._player.target.y - (_0xfbe7x75 * _0xfbe7x40);
        if (!this.touchControll) {
            this.touchControll = true
        }
    };
    _0xfbe7x67.prototype.handleTouch = function(_0xfbe7x74, _0xfbe7x75) {
        var _0xfbe7x76 = _0xfbe7x74 * _0xfbe7x3f + this._touchOffetX;
        var _0xfbe7x77 = _0xfbe7x75 * _0xfbe7x40 + this._touchOffetY;
        if (_0xfbe7x76 > _0xfbe7x3f) {
            _0xfbe7x76 = _0xfbe7x3f
        } else {
            if (_0xfbe7x76 < 0) {
                _0xfbe7x76 = 0
            }
        };
        if (_0xfbe7x77 > _0xfbe7x40) {
            _0xfbe7x77 = _0xfbe7x40
        } else {
            if (_0xfbe7x77 < 0) {
                _0xfbe7x77 = 0
            }
        };
        this.updateTarget(_0xfbe7x76, _0xfbe7x77)
    };
    _0xfbe7x67.prototype.updateTarget = function(_0xfbe7x76, _0xfbe7x77) {
        if (!this._running && !this._pause && this._alive) {
            this.startGame()
        };
        if (this._running) {
            this._player.target.x = _0xfbe7x76;
            this._player.target.y = _0xfbe7x77
        }
    };
    _0xfbe7x67.prototype.initVariables = function() {
        _0xfbe7x43 = true;
        if (!_0xfbe7x45) {
            _0xfbe7x58()
        };
        this._status = 'init variables';
        this._moveSpeed = 100500; //was 10
        this._pause = false;
        this._alive = true;
        this._score = 0;
        this.updateDifficulty();
        this._probRegulation = 0;
        this._player.x = this._player.target.x = _0xfbe7x3f / 2.1;
        this._player.y = this._player.target.y = _0xfbe7x40 / 3;
        this._player.resetProps();
        this._player.size = 0.2;
        this._player.level = 0.2;
        this._player.visible = true;
        this._playerHitArea.x = this._bodyHitArea.x = this._player.x;
        this._playerHitArea.y = this._bodyHitArea.y = this._player.y;
        this._playerHitArea.scale.x = this._bodyHitArea.scale.x = this._player.scale.x;
        this._playerHitArea.scale.y = this._bodyHitArea.scale.y = this._player.scale.y;
        this._touchOffetX = 0;
        this._touchOffetY = 0;
        this._marine.x = _0xfbe7x3f * 0.77;
        this._marine.y = _0xfbe7x40 * 0.72;
        this._marine.direction = 1;
        this._marine.beta = 0;
        this.clearPool(this._pool);
        this.clearPool(this._bubbles);
        this.clearPool(this._shadows);
        this._pool = [];
        this._bubbles = [];
        this._shadows = [];
        this._mines = [];
        this.minesDistance = 5;
        this._samePose = 0;
        this._t = 0;
        this._generateTime = 30 + Math.random() * 40;
        this.bgSound.seek(0);
        this._renderer.render(this._stage)
    };
    _0xfbe7x67.prototype.continueLevel = function() {
        _0xfbe7x47 = false;
        _0xfbe7x46.visible = true;
        this._alive = true;
        this._player.x = this._player.target.x = _0xfbe7x3f / 2.1;
        this._player.y = this._player.target.y = _0xfbe7x40 / 3;
        this._player.visible = true;
        this.clearPool(this._pool);
        this._pool = [];
        this.bgSound.seek(0)
    };
    _0xfbe7x67.prototype.startGame = function() {
        this._status = 'game started';
        console.log('game start');
        this.runGame()
    };
    _0xfbe7x67.prototype.endGame = function() {
        this.stopGame();
        gamee.gameOver()
    };
    _0xfbe7x67.prototype.updateScore = function() {
        _0xfbe7x57(this._score)
    };
    _0xfbe7x67.prototype.updateDifficulty = function() {
        if (this._score < 30) {
            this._foodProb = 50;
            this._mineProb = 0
        } else {
            if (this._score < 60) {
                this._foodProb = 35;
                this._mineProb = 10
            } else {
                if (this._score < 90) {
                    this._foodProb = 25;
                    this._mineProb = 10
                } else {
                    if (this._score < 120) {
                        this._foodProb = 20;
                        this._mineProb = 20
                    } else {
                        if (this._score < 150) {
                            this._foodProb = 15;
                            this._mineProb = 20
                        } else {
                            this._foodProb = 10;
                            this._mineProb = 30
                        }
                    }
                }
            }
        }
    };
    _0xfbe7x67.prototype.playerMove = function() {
        var _0xfbe7x78 = this._player.target.y - this._player.y;
        var _0xfbe7x79 = this._player.target.x - this._player.x;
        if (_0xfbe7x78 == 0 && _0xfbe7x79 == 0) {
            this._samePose++
        } else {
            if (this._player.x < this._player.target.x) {
                this._player.direction = -1
            } else {
                if (this._player.x > this._player.target.x) {
                    this._player.direction = 1
                }
            };
            if (Math.sqrt(_0xfbe7x78 * _0xfbe7x78 + _0xfbe7x79 * _0xfbe7x79) < this._moveSpeed) {
                this._player.x = this._player.target.x;
                this._player.y = this._player.target.y
            } else {
                var _0xfbe7x7a = Math.atan2(_0xfbe7x78, _0xfbe7x79);
                this._player.x += Math.cos(_0xfbe7x7a) * this._moveSpeed;
                this._player.y += Math.sin(_0xfbe7x7a) * this._moveSpeed
            };
            this._playerHitArea.x = this._bodyHitArea.x = this._player.x;
            this._playerHitArea.y = this._bodyHitArea.y = this._player.y;
            this._playerHitArea.scale.x = this._bodyHitArea.scale.x = this._player.scale.x;
            this._playerHitArea.scale.y = this._bodyHitArea.scale.y = this._player.scale.y;
            if (this._samePose > 30) {
                if (!this.touchControll) {
                    this.moveSound.play()
                };
                this.generateBubble(this._player.x + (this._player.width / 2), this._player.y - 75, 3, this._player.size + 0.2)
            };
            this._samePose = 0
        }
        this.hack.x.text = this._player.x;
        this.hack.y.text = this._player.y;
    };
    _0xfbe7x67.prototype.updateBubbles = function() {
        var _0xfbe7x7b = this._bubbles.slice(0);
        for (var _0xfbe7x22 = 0; _0xfbe7x22 < this._bubbles.length; _0xfbe7x22++) {
            _0xfbe7x7b[_0xfbe7x22].y -= 2;
            _0xfbe7x7b[_0xfbe7x22].alpha -= 0.005;
            if (_0xfbe7x7b[_0xfbe7x22].y < 0) {
                this._bubbles.splice(this._bubbles.indexOf(_0xfbe7x7b[_0xfbe7x22]), 1);
                this._stage.removeChild(_0xfbe7x7b[_0xfbe7x22])
            }
        }
    };
    _0xfbe7x67.prototype.updateMarine = function() {
        this._marine.beta += 0.01;
        this._marine.y -= Math.sin(this._marine.beta) / 5
    };
    _0xfbe7x67.prototype.updateShadows = function() {
        for (var _0xfbe7x22 = 0; _0xfbe7x22 < this._shadows.length; _0xfbe7x22++) {
            var _0xfbe7x7c = this._shadows[_0xfbe7x22];
            _0xfbe7x7c.x -= 0.7 * _0xfbe7x7c.scale.x;
            if (_0xfbe7x7c.x < -280 || _0xfbe7x7c.x > _0xfbe7x3f + Math.abs(_0xfbe7x7c.width)) {
                this._stage.removeChild(_0xfbe7x7c);
                this._shadows.splice(_0xfbe7x22, 1)
            }
        }
    };
    _0xfbe7x67.prototype.updateParalax = function() {
        var _0xfbe7x2f = (500 - this._player.y) / 2;
        this._paralax2.y = _0xfbe7x2f > 0 ? _0xfbe7x40 + _0xfbe7x2f / 10 : _0xfbe7x40;
        this._paralax1.y = _0xfbe7x2f > 0 ? _0xfbe7x40 + _0xfbe7x2f / 5 : _0xfbe7x40
    };
    _0xfbe7x67.prototype.update = function(_0xfbe7x66) {
        if (this._alive && _0xfbe7x47) {
            this.playerMove();
            this.updateBubbles();
            this.updateMarine();
            this.updateParalax();
            this.updateShadows();
            var _0xfbe7x7b = this._pool.slice(0);
            for (var _0xfbe7x22 = 0; _0xfbe7x22 < _0xfbe7x7b.length; _0xfbe7x22++) {
                var _0xfbe7x7c = _0xfbe7x7b[_0xfbe7x22];
                var _0xfbe7x7d = _0xfbe7x7c.speed * _0xfbe7x7c.direction;
                if (_0xfbe7x7c.type == 'vertical') {
                    _0xfbe7x7c.y += _0xfbe7x7d;
                    if ((_0xfbe7x7c.y > _0xfbe7x40 + _0xfbe7x7c.height && _0xfbe7x7c.direction == 1) || (_0xfbe7x7c.y < -196 && _0xfbe7x7c.direction != 1)) {
                        this.removeFromPool(_0xfbe7x7c);
                        continue
                    }
                } else {
                    _0xfbe7x7c.x += _0xfbe7x7d;
                    _0xfbe7x7c.y = _0xfbe7x7c.base + 50 * Math.sin(_0xfbe7x7c.beta);
                    _0xfbe7x7c.beta += 0.02;
                    if ((_0xfbe7x7c.x > _0xfbe7x3f + Math.abs(_0xfbe7x7c.width) && _0xfbe7x7c.direction == 1) || (_0xfbe7x7c.x < -196 && _0xfbe7x7c.direction != 1)) {
                        this.removeFromPool(_0xfbe7x7c);
                        continue
                    }
                };
                if (_0xfbe7x7c.outline && _0xfbe7x7c.level <= this._player.level) {
                    _0xfbe7x7c.outline.visible = false
                };
                if (colisions.checkPixelCollision(_0xfbe7x7c, this._bodyHitArea)) {
                    if (_0xfbe7x7c.level > this._player.level) {
                        /*
                        this.deathSound.play();
                        this._alive = false;
                        this._t = 0;
                        setTimeout(function() {
                            _0xfbe7x5d()
                        }, 1000)
                        */
                    } else {
                        if (colisions.checkPixelCollision(_0xfbe7x7c, this._playerHitArea)) {
                            this.eatSound.play();
                            this.removeFromPool(_0xfbe7x7c);
                            var _0xfbe7x7e = _0xfbe7x7c.level / (this._player.level * 70);
                            if (this._player.level < 0.8) {
                                this._player.level += _0xfbe7x7e
                            };
                            this._player.gotoAndPlay(1);
                            this._player.scaleUp();
                            this._moveSpeed = 100500; //was 10 - (7 * this._player.level)
                            this._score += _0xfbe7x7c.points;
                            this.updateDifficulty();
                            this.updateScore()
                        }
                    }
                }
            };
            //added death on x <= 10
            if (this._player.x <= 10) {
                this.deathSound.play();
                this._alive = false;
                this._t = 0;
                setTimeout(function() {
                    _0xfbe7x5d()
                }, 1000)
            }
            this._generateTime--;
            if (this._generateTime < 0) {
                if (this.minesDistance > 0) {
                    this.minesDistance--
                };
                this._generateTime = 25 + Math.random() * 40;
                this.generate()
            }
        } else {
            if (this._t < 50 && this._t % 10 == 0) {
                this._player.visible = !this._player.visible
            } else {
                this._player.visible = true
            }
        };
        this._t++;
        if (this._t == 100) {
            this._t = 0
        };
        var _0xfbe7x7f = this;
        this._renderer.render(this._stage)
    };
    _0xfbe7x67.prototype.removeFromPool = function(_0xfbe7x7c) {
        var _0xfbe7x80 = this._pool.indexOf(_0xfbe7x7c);
        if (_0xfbe7x80 > -1) {
            this._pool.splice(_0xfbe7x80, 1);
            this._stage.removeChild(_0xfbe7x7c)
        }
    };
    _0xfbe7x67.prototype.generateBubble = function(_0xfbe7x81, _0xfbe7x82, _0xfbe7x83, _0xfbe7xe) {
        var _0xfbe7x84 = Math.round(Math.random());
        for (var _0xfbe7x22 = 0; _0xfbe7x22 < _0xfbe7x83; _0xfbe7x22++) {
            var _0xfbe7x85 = new PIXI.Sprite(PIXI.loader.resources.bubble.texture);
            _0xfbe7x85.x = _0xfbe7x81 - 10 + Math.random() * 20;
            _0xfbe7x85.y = _0xfbe7x82 + 25 * (_0xfbe7x22 + 1);
            _0xfbe7x85.scale.x = _0xfbe7x85.scale.y = _0xfbe7xe - 0.15 * _0xfbe7x22;
            if (_0xfbe7x84) {
                this._stage.addChildAt(_0xfbe7x85, 2)
            } else {
                this._stage.addChild(_0xfbe7x85)
            };
            this._bubbles.push(_0xfbe7x85)
        }
    };
    _0xfbe7x67.prototype.generate = function() {
        if (Math.random() > 0.4) {
            this.generateBubble(Math.random() * _0xfbe7x3f, _0xfbe7x40 + Math.random() * 100, 1 + Math.floor(Math.random() * 4), 1)
        };
        var _0xfbe7x86 = Math.random() * 100;
        if (this._shadows.length < 1 && _0xfbe7x86 > 0.9) {
            this.generateSiluete()
        };
        if (_0xfbe7x86 < this._mineProb) {
            if (_0xfbe7x86 < this._mineProb / 2) {
                this.generateMine()
            } else {
                this.generateMeduse()
            }
        } else {
            if (_0xfbe7x86 < this._mineProb + this._foodProb + this._probRegulation) {
                if (this._probRegulation > 0) {
                    this._probRegulation = 0
                } else {
                    this._probRegulation -= 5
                };
                this.generateSmaller()
            } else {
                if (this._probRegulation < 0) {
                    this._probRegulation = 0
                } else {
                    this._probRegulation += 5
                };
                this.generateLarger()
            }
        }
    };
    _0xfbe7x67.prototype.generateSiluete = function() {
        var _0xfbe7x87 = new PIXI.Sprite(PIXI.loader.resources.siluete.texture);
        var _0xfbe7x86 = Math.random();
        if (_0xfbe7x86 > 0.5) {
            _0xfbe7x87.x = _0xfbe7x3f + _0xfbe7x87.width
        } else {
            _0xfbe7x87.x = -100;
            _0xfbe7x87.scale.x = -1
        };
        _0xfbe7x87.y = _0xfbe7x40 / 2 + _0xfbe7x86 * 100;
        this._stage.addChildAt(_0xfbe7x87, 2);
        this._shadows.push(_0xfbe7x87)
    };
    _0xfbe7x67.prototype.getIndexByLevel = function() {
        var _0xfbe7x80 = 0;
        for (var _0xfbe7x22 = 0; _0xfbe7x22 < init.fishes.length; _0xfbe7x22++) {
            if (init.fishes[_0xfbe7x22].level < this._player.level) {
                _0xfbe7x80++
            } else {
                break
            }
        };
        return _0xfbe7x80
    };
    _0xfbe7x67.prototype.generateSmaller = function() {
        var _0xfbe7x88 = this.getIndexByLevel();
        var _0xfbe7x86 = this.getRandomFrom(_0xfbe7x88);
        var _0xfbe7x89 = PIXI.loader.resources[init.fishes[_0xfbe7x86].bitmap].texture;
        var _0xfbe7x8a = new Fish(_0xfbe7x89);
        _0xfbe7x8a.speed = 1 + this.getRandomFrom(3);
        _0xfbe7x8a.type = 'normal';
        _0xfbe7x8a.y = this.getRandomFrom(this.gameHeight - _0xfbe7x89.height);
        _0xfbe7x8a.level = init.fishes[_0xfbe7x86].level;
        _0xfbe7x8a.points = _0xfbe7x86 + 1;
        _0xfbe7x8a.beta = 0;
        _0xfbe7x8a.base = _0xfbe7x8a.y;
        if (init.fishes[_0xfbe7x86].outline) {
            var _0xfbe7x8b = new PIXI.Sprite(PIXI.loader.resources[init.fishes[_0xfbe7x86].outline].texture);
            _0xfbe7x8b.anchor.set(0.5);
            _0xfbe7x8a.addChild(_0xfbe7x8b);
            _0xfbe7x8a.outline = _0xfbe7x8b
        };
        if (this.getRandomFrom(2)) {
            _0xfbe7x8a.x = -300;
            _0xfbe7x8a.scale.x = -1;
            _0xfbe7x8a.direction = 1
        } else {
            _0xfbe7x8a.x = _0xfbe7x3f + 300;
            _0xfbe7x8a.scale.x = 1;
            _0xfbe7x8a.direction = -1
        };
        this._pool.push(_0xfbe7x8a);
        this._stage.addChild(_0xfbe7x8a)
    };
    _0xfbe7x67.prototype.generateLarger = function() {
        var _0xfbe7x88 = this.getIndexByLevel();
        var _0xfbe7x8c = init.fishes.length - 1 - _0xfbe7x88;
        if (_0xfbe7x8c > 5) {
            _0xfbe7x8c = 5
        };
        var _0xfbe7x86 = Math.round(_0xfbe7x88 + Math.random() * _0xfbe7x8c);
        var _0xfbe7x89 = PIXI.loader.resources[init.fishes[_0xfbe7x86].bitmap].texture;
        var _0xfbe7x8a = new Fish(_0xfbe7x89);
        _0xfbe7x8a.speed = 1 + this.getRandomFrom(3);
        _0xfbe7x8a.type = 'normal';
        _0xfbe7x8a.y = this.getRandomFrom(this.gameHeight - _0xfbe7x89.height);
        _0xfbe7x8a.level = init.fishes[_0xfbe7x86].level;
        _0xfbe7x8a.points = _0xfbe7x86;
        _0xfbe7x8a.beta = 0;
        _0xfbe7x8a.base = _0xfbe7x8a.y;
        if (init.fishes[_0xfbe7x86].outline) {
            var _0xfbe7x8b = new PIXI.Sprite(PIXI.loader.resources[init.fishes[_0xfbe7x86].outline].texture);
            _0xfbe7x8b.anchor.set(0.5);
            _0xfbe7x8a.addChild(_0xfbe7x8b);
            _0xfbe7x8a.outline = _0xfbe7x8b
        };
        if (this.getRandomFrom(2)) {
            _0xfbe7x8a.x = -300;
            _0xfbe7x8a.scale.x = -1;
            _0xfbe7x8a.direction = 1
        } else {
            _0xfbe7x8a.x = _0xfbe7x3f + 300;
            _0xfbe7x8a.scale.x = 1;
            _0xfbe7x8a.direction = -1
        };
        this._pool.push(_0xfbe7x8a);
        this._stage.addChild(_0xfbe7x8a)
    };
    _0xfbe7x67.prototype.generateMine = function() {
        var _0xfbe7x86 = 21;
        var _0xfbe7x89 = PIXI.loader.resources[init.fishes[_0xfbe7x86].bitmap].texture;
        var _0xfbe7x8a = new Fish(_0xfbe7x89);
        _0xfbe7x8a.speed = 1 + this.getRandomFrom(3);
        _0xfbe7x8a.type = 'normal';
        _0xfbe7x8a.y = this.getRandomFrom(this.gameHeight - _0xfbe7x89.height);
        _0xfbe7x8a.level = init.fishes[_0xfbe7x86].level;
        _0xfbe7x8a.beta = 0;
        _0xfbe7x8a.base = _0xfbe7x8a.y;
        if (this.getRandomFrom(2)) {
            _0xfbe7x8a.x = -300;
            _0xfbe7x8a.scale.x = -1;
            _0xfbe7x8a.direction = 1
        } else {
            _0xfbe7x8a.x = _0xfbe7x3f + 300;
            _0xfbe7x8a.scale.x = 1;
            _0xfbe7x8a.direction = -1
        };
        this._pool.push(_0xfbe7x8a);
        this._stage.addChild(_0xfbe7x8a)
    };
    _0xfbe7x67.prototype.generateMeduse = function() {
        var _0xfbe7x89 = PIXI.loader.resources.meduza.texture;
        var _0xfbe7x8a = new Fish(_0xfbe7x89);
        _0xfbe7x8a.speed = 1 + this.getRandomFrom(3);
        _0xfbe7x8a.type = 'vertical';
        _0xfbe7x8a.x = this.getRandomFrom(_0xfbe7x3f - _0xfbe7x89.width);
        _0xfbe7x8a.level = 9999;
        _0xfbe7x8a.beta = 0;
        _0xfbe7x8a.base = _0xfbe7x8a.x;
        _0xfbe7x8a.y = _0xfbe7x40 + 300;
        _0xfbe7x8a.direction = -1;
        this._pool.push(_0xfbe7x8a);
        this._stage.addChild(_0xfbe7x8a)
    };
    _0xfbe7x67.prototype.clearPool = function(_0xfbe7x7b) {
        if (_0xfbe7x7b) {
            while (_0xfbe7x7b.length > 0) {
                try {
                    this._stage.removeChild(_0xfbe7x7b.shift())
                } catch (err) {
                    console.log(err, 'error_ pool clearing')
                }
            }
        }
    };
    _0xfbe7x67.prototype.getRandomFrom = function(_0xfbe7x9) {
        return Math.round(Math.random() * (_0xfbe7x9 - 1))
    };
    _0xfbe7x67.prototype.runGame = function() {
        if (!this._running) {
            this._running = true;
            PIXI.ticker.shared.start();
            this.bgSound.play()
        }
    };
    _0xfbe7x67.prototype.stopGame = function() {
        if (this._running) {
            this._running = false;
            PIXI.ticker.shared.stop();
            this.bgSound.pause()
        }
    };
    _0xfbe7x67.prototype.assetsLoadComplete = function(_0xfbe7x8d, _0xfbe7x8e) {
        this._status = 'assets loaded';
        this.createScene()
    };
    _0xfbe7x67.prototype.pause = function() {
        if (!this._pause) {
            this._pause = true;
            this.stopGame()
        }
    };
    _0xfbe7x67.prototype.resume = function() {
        if (this._pause) {
            this._pause = false;
            this.startGame()
        }
    };
    _0xfbe7x67.prototype.restart = function() {
        this.initVariables()
    };
    return _0xfbe7x67
})();
var game;
window.onload = function() {
    game = new Game()
}
