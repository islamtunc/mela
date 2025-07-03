// Bismillahirrahmanirahim
// MainActivity.java - Example Android Activity using Mela JNI

package com.example.app;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        TextView tv = new TextView(this);
        MelaLib mela = new MelaLib();
        int result = mela.add(3, 5);
        tv.setText("Mela add(3,5) = " + result);
        setContentView(tv);
    }
}
// Elhamdulillahirabbulalemin
