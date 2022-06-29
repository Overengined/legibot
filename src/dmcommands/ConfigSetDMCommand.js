/**
 * Copyright © 2022 Maxime Friess <M4x1me@pm.me>
 * 
 * This file is part of AN-BOT.
 * 
 * AN-BOT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * AN-BOT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with AN-BOT.  If not, see <https://www.gnu.org/licenses/>.
 */

import SoftConfig from '../config/SoftConfig.js';
import DMCommand from "../DMCommand.js";

class ConfigSetDMCommand extends DMCommand {
    constructor() {
        super();
    }

    getName() {
        return "config set";
    }

    getUsage() {
        return "config set <name> <value>";
    }

    getDescription() {
        return "Modifie une option de configuration.";
    }

    getArgumentsRegex() {
        return "([a-zA-Z0-9\.]+) (.+)";
    }

    async execute(message, content, args) {
        SoftConfig.set(args[1], args[2]);
        SoftConfig.save();
        message.reply({ content: "Option `" + args[1] + "` mise à jour." });
    }
}

export default ConfigSetDMCommand;