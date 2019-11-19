export default class ClassBuilder {
    private _classes: Array<string> = [];

    static Start() {
        return new ClassBuilder();
    }

    Append(className: string) : ClassBuilder {
        this._classes.push(className);
        return this;
    }

    AppendIf(className: string, predicate: boolean) : ClassBuilder {
        if(predicate) {
            return this.Append(className);
        }

        return this;
    }

    AppendIfElse(classNamePass: string, classNameFail: string, predicate: boolean) : ClassBuilder {
        if(predicate) {
            return this.Append(classNamePass);
        }

        return this.Append(classNameFail);
    }

    Build() : string {
        return this._classes.join(" ");
    }
}