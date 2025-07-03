// Bismillahirrahmanirahim
// MelaLib.java - Example Java JNI wrapper for Mela native library

package com.example.app;

public class MelaLib {
    static {
        System.loadLibrary("mela");
    }
    public native int add(int a, int b);
}
// Elhamdulillahirabbulalemin
