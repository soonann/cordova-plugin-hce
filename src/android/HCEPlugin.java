// Cordova HCE Plugin
// (c) 2015 Don Coleman

package com.megster.cordova.hce;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.json.JSONException;

import java.util.Arrays;

public class HCEPlugin extends CordovaPlugin {

    private static final String REGISTER_COMMAND_CALLBACK = "registerCommandCallback";
    private static final String SEND_RESPONSE = "sendResponse";
    private static final String REGISTER_DEACTIVATED_CALLBACK = "registerDeactivatedCallback";
    private static final String TAG = "HCEPlugin";

    private CallbackContext onCommandCallback;
    private CallbackContext onDeactivatedCallback;

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {

        Log.d(TAG, action);

        if (action.equalsIgnoreCase(REGISTER_COMMAND_CALLBACK)) {

            // TODO this would be better in an initializer
            CordovaApduService.setHCEPlugin(this);

            // save the callback`
            onCommandCallback = callbackContext;
            PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT);
            result.setKeepCallback(true);
            callbackContext.sendPluginResult(result);

        } else if (action.equalsIgnoreCase(SEND_RESPONSE)) {

            byte[] data = ConcatArrays(args.getString(0).getBytes(), HexStringToByteArray("9000")); 
			Log.d(TAG, " CordovaData:" + Arrays.toString(data) );

            if (CordovaApduService.sendResponse(data)) {
                callbackContext.success();
            } else {
                // TODO This message won't make sense to developers.
                callbackContext.error("Missing Reference to CordovaApduService.");
            }

        } else if (action.equalsIgnoreCase(REGISTER_DEACTIVATED_CALLBACK)) {

            // save the callback`
            onDeactivatedCallback = callbackContext;
            PluginResult result = new PluginResult(PluginResult.Status.NO_RESULT);
            result.setKeepCallback(true);
            callbackContext.sendPluginResult(result);

        } else {

            return false;

        }

        return true;
    }

    public void deactivated(int reason) {
        Log.d(TAG, "deactivated " + reason);
        if (onDeactivatedCallback != null) {
            PluginResult result = new PluginResult(PluginResult.Status.OK, reason);
            result.setKeepCallback(true);
            onDeactivatedCallback.sendPluginResult(result);
        }
    }

    public void sendCommand(byte[] command) {
        Log.d(TAG, "sendCommand " + Arrays.toString(command));
        if (onCommandCallback != null) {
            PluginResult result = new PluginResult(PluginResult.Status.OK, command);
            result.setKeepCallback(true);
            onCommandCallback.sendPluginResult(result);
        }
    }


    public static String ByteArrayToHexString(byte[] bytes) {
        final char[] hexArray = {'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
        char[] hexChars = new char[bytes.length * 2]; // Each byte has two hex characters (nibbles)
        int v;
        for (int j = 0; j < bytes.length; j++) {
            v = bytes[j] & 0xFF; // Cast bytes[j] to int, treating as unsigned value
            hexChars[j * 2] = hexArray[v >>> 4]; // Select hex character from upper nibble
            hexChars[j * 2 + 1] = hexArray[v & 0x0F]; // Select hex character from lower nibble
        }
        return new String(hexChars);
    }


    public static byte[] HexStringToByteArray(String s) throws IllegalArgumentException {
        int len = s.length();
        if (len % 2 == 1) {
            throw new IllegalArgumentException("Hex string must have even number of characters");
        }
        byte[] data = new byte[len / 2]; // Allocate 1 byte per 2 hex characters
        for (int i = 0; i < len; i += 2) {
            // Convert each character into a integer (base-16), then bit-shift into place
            data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
                    + Character.digit(s.charAt(i+1), 16));
        }
        return data;
    }

    public static byte[] ConcatArrays(byte[] first, byte[]... rest) {
        int totalLength = first.length;
        for (byte[] array : rest) {
            totalLength += array.length;
        }
        byte[] result = Arrays.copyOf(first, totalLength);
        int offset = first.length;
        for (byte[] array : rest) {
            System.arraycopy(array, 0, result, offset, array.length);
            offset += array.length;
        }
        return result;
    }
}
